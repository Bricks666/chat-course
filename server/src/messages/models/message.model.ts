import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Chat } from '@/chats/models/chat.model';

@Table({
  tableName: 'messages',
  updatedAt: false,
})
export class Message extends Model<Message> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare messageId: number;

  @ForeignKey(() => Chat)
  @Column({
    type: DataType.NUMBER,
  })
  declare chatId: number;
}
