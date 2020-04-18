import * as WebSocket from 'ws';


const wss = new WebSocket.Server({ port: 8080, clientTracking: true });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);
        ws.send("response");
    });

    if (wss.clients.size === 1) {
        ws.send('waiting for another player to connect');
    } else if (wss.clients.size === 2) {
        wss.clients.forEach(client => {
            client.send('starting game');
        });

    }

    ws.send(JSON.stringify({ clients: wss.clients.size }));
});
