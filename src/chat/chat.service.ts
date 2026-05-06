import { Injectable } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  constructor(private readonly chatGateway: ChatGateway) {}

  sendMessage(data: any) {
    this.chatGateway.sendMessageToAll(data);
    return {
      status: true,
      message: 'Message sent via socket',
      data,
    };
  }
}
