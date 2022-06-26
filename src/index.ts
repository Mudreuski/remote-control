import 'dotenv/config'
import { httpServer } from './http_server';
import { websocketServer } from './webssocket_server';

const HTTP_PORT = process.env.HTTP_PORT || 5000;
httpServer.listen(HTTP_PORT);
process.stdout.write(`Http server started on ${HTTP_PORT} port`);

const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT || 6000;
websocketServer.listen(WEBSOCKET_PORT);
process.stdout.write(`Websocket server started on ${WEBSOCKET_PORT} port`);
