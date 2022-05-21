const express = require('express');
const app = express();

// creamos un servidor http a paratir de la libreria de express
const http = require('http').Server(app);
//para generar una comunicacion vamos a trabajr con socket.io
const io = require('socket.io')(http);

// routes

app.use(require('./routes/zoom.routes'));

// dodne vamos a cargar los indexo html
app.use(express.static(__dirname+ "/public"));

io.on('connection', (socket) => {

    socket.on('stream', (image) => {
        ///emitirel evento a todos sockets conectados
        socket.broadcast.emit('stream', image);
    })

    var username;

    socket.on('crearUsuario',function(data)
    {
        username=data;
    });
    socket.on('mensajeNuevo',function(data)
    {  
       socket.broadcast.emit('mensaje',{
       usuario:username,
       mensaje:data
   });
       socket.emit('mensaje',{
       usuario:username,
       mensaje:data
   });
});
})



module.exports = http;