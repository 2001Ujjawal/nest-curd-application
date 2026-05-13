import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
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
    console.log('=============socket', Socket);

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

  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    console.log(data);
    this.server.emit('message', {
      user: data.user,
      text: data.message,
    });
  }
}

/*
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

*/
