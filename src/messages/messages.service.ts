import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {

  message: Message[] = [{
    name: "WelcomeBot",
    text: "Hello!"
  }];

  clientToUser = {};

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text
    };

    this.message.push(message); // TODO: improve
    return message;
  }
  
  findAll() {
    return this.message;
  }

  indentify(name: string, clientId: string){
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string){
    return this.clientToUser[clientId];
  }
}
