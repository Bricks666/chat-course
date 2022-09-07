import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Message } from '@/messages/models/message.model';
import { User } from '@/users/models/user.model';
import { ChatUsers } from './chat-user.model';

interface CreateChat {
  readonly users: User[];
}

@Table({
  tableName: 'chats',
})
export class Chat extends Model<Chat, CreateChat> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare chatId: number;

  @BelongsToMany(() => User, () => ChatUsers)
  declare users: User[];

  @HasMany(() => Message)
  declare messages: Message[];
}
