import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '@/users/models/user.model';

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

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  @ForeignKey(() => User)
  declare senderId: number;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  @ForeignKey(() => User)
  declare receiverId: number;

  @Column({
    type: DataType.STRING,
  })
  declare content: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare isViewed: boolean;
}
