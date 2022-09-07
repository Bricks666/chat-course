import { User } from '@/users/models/user.model';
import { Column, DataType, ForeignKey, Model } from 'sequelize-typescript';
import { Chat } from './chat.model';

export class ChatUsers extends Model<ChatUsers> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  @ForeignKey(() => Chat)
  declare chatId: number;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  @ForeignKey(() => User)
  declare userId: number;
}
