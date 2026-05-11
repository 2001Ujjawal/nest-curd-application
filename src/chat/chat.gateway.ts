import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  OnGatewayDisconnect,
  OnGatewayConnection,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  handleConnection(client: Socket) {
    console.log('User Connected:', client.id);
    // this.server.emit('message', {
    //   user: 'System',
    //   text: `User joined`,
    // });
  }
  handleDisconnect(client: Socket) {
    console.log('User Disconnected:', client.id);
    // this.server.emit('message', {
    //   user: 'System',
    //   text: `User left`,
    // });
  }
  @SubscribeMessage('upload')
  handleUpload(@MessageBody() file: any) {
    console.log(file);
    return {
      status: true,
      message: 'File received successfully',
    };
  }
}
