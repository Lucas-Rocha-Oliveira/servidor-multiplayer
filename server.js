const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.on('message', (message) => {
        console.log('Mensagem recebida:', message);
        socket.send('Mensagem recebida: ' + message);
    });
});

console.log('Servidor WebSocket rodando na porta 8080');
