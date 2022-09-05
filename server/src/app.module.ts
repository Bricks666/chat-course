import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chat } from './chats/models/chat.model';
import { Message } from './messages/models/message.model';
import { User } from './users/models/user.model';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    /*     SequelizeModule.forRoot({
      dialect: 'sqlite',
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadModels: true,
      models: [User, Chat, Message],
    }), */
    ChatsModule,
  ],
})
export class AppModule {}
