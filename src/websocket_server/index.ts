import { WebSocketServer, createWebSocketStream, RawData } from 'ws';
import { decodeInput } from './helpers';
import { router } from './router';

export const websocketServer = ( port: number ): void => {
    const wsServer = new WebSocketServer({ port });

    wsServer.on('connection', (webSocket) => {
        const wsStream = createWebSocketStream(webSocket, { encoding: 'utf-8', decodeStrings:false });

        wsStream.on('data', async ( data: RawData ) => {
            const decodedData = decodeInput(data);
            const response = await router(decodedData);

            process.stdout.write(`${response}\n`);
            wsStream.write(response);
        });
    });

    process.on('SIGINT', () => {
        process.stdout.write('Websocket closed\n');
        wsServer.close();
    });
};
