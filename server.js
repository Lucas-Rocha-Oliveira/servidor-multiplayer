const WebSocket = require('ws');

// Cria o servidor WebSocket
const PORT = process.env.PORT || 8080; // Usa a porta do ambiente Fly.io ou 8080 como padrão
const server = new WebSocket.Server({ port: PORT });

server.on('connection', (socket) => {
    console.log('Cliente conectado!');

    socket.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
        socket.send('Mensagem recebida!');
    });

    socket.on('close', () => {
        console.log('Cliente desconectado!');
    });
});

console.log(`Servidor WebSocket rodando na porta ${PORT}`);
