import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './dtos/messages.repository';

@Injectable()
export class MessagesService {
  //using dependency injection
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

  // update(id: string, content: string) {
  //   return this.messagesRepo.update(id, content);
  // }
}
