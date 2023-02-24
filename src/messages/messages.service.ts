import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {

  message: Message[] = [{
    name: "WelcomeBot",
    text: "Hello!"
  }];

  create(createMessageDto: CreateMessageDto) {
    const message = {...createMessageDto};
    this.message.push(createMessageDto); // TODO: improve
    return message;
  }

  findAll() {
    return this.message;
  }
}
