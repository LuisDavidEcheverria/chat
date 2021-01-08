const socket = io();
let usuario = prompt('Ingresa tu nombre de usuario','Anónimo');
let mensaje = document.getElementById('mensaje');
let chat = document.getElementById('conversacion');

function EnviarMensaje()
{
    socket.emit('EnviarMensaje',
    {
        usuario:usuario,
        mensaje:mensaje.value
    })
    mensaje.value='';
}

socket.on('Mensaje',function(datos)
{
    console.log(datos);
     chat.innerHTML +=`<p>
     <strong>${datos.usuario}:</strong>${datos.mensaje}
     </p>`
})