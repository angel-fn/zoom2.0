function validate()
{
    var username, password;

   username = document.getElementById("username").value;
   password = document.getElementById("password").value;
if(username== "pi" && password == "angel")
{
    alert("BIENVENIDO AL ZOOMESTRE, PLATAFORMA DE STREAMING DE ESIMEZ");
    window.location = "index.html";
    
}
else
{
    alert("Contraseña y/o Usuario incorrecto");
}

}
function registro(){
    window.location = "registro.html";
}
function chat(){
    window.open('chat.html');
}
function chatV(){
    window.open('chat.html');
}