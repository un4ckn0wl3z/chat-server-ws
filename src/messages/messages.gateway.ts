import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server } from 'http';

@WebSocketGateway({
  cors: {
    origin: '*'
  },
})
export class MessagesGateway {

  @WebSocketServer()
  server: Server;

  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = this.messagesService.create(createMessageDto);
    this.server.emit('message', message);
    return message;
    // https://youtu.be/atbdpX4CViM?t=784
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('join')
  joinRoom() {
    // TODO
  }

  @SubscribeMessage('typing')
  async typing() {
    // TODO
  }

}
