import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Message } from '@/messages/models/message.model';

@Table({
  tableName: 'chats',
})
export class Chat extends Model<Chat> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare chatId: number;

  @Column({
    type: DataType.STRING,
  })
  declare lastActivityDate: string;

  @HasMany(() => Message)
  declare messages: Message[];
}
