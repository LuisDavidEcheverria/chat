const express = require('express');
const path = require('path');
const SocketIO = require('socket.io');

app = express();

app.set('port' ,process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')));

const server = app.listen(app.get('port'),()=>
{
    console.log('Servidor escuchando en el puerto ',app.get('port'));
})

const io = SocketIO(server);

io.on('connection',(socket)=>
{
    socket.on('EnviarMensaje',(datos) =>
    {
        io.sockets.emit('Mensaje',datos);
    })
})
