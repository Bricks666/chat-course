import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateChatDto } from './dto';
import { INCOMING_EVENTS, OUTCOMING_CHAT_EVENTS } from './events';

@WebSocketGateway({
  cors: true,
  namespace: '/chats',
})
export class ChatsGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log('init');
  }

  @SubscribeMessage(INCOMING_EVENTS.CREATE_CHAT)
  handelEvents(
    @MessageBody() body: CreateChatDto,
    @ConnectedSocket() socket: Socket,
  ) {
    console.log(body);
    socket.emit(OUTCOMING_CHAT_EVENTS.NEW_CHAT);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('connect');
  }

  handleDisconnect(client: Socket) {
    console.log('disconnect');
  }
}
