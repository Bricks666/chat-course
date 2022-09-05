import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: true,
  namespace: '/chats',
})
export class ChatsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handelEvents(@MessageBody() body: unknown) {
    console.log(body, this.server);
  }
}
