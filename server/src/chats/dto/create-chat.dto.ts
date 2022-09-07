import { PickType } from '@nestjs/swagger';
import { Chat } from '../models/chat.model';

export class CreateChatDto extends PickType(Chat, ['users']) {}
