import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CreateUser {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly photo?: string | null;
}

@Table({
  tableName: 'users',
  updatedAt: false,
})
export class User extends Model<User, CreateUser> {
  @ApiProperty({
    type: Number,
    example: 15,
    description: 'Идентификатор пользователя',
  })
  @IsInt()
  @Min(0)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare userId: number;

  @ApiProperty({
    type: String,
    example: 'Petr',
    description: 'Имя пользователя',
  })
  @IsString()
  @Length(4)
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    type: String,
    example: 'example@example.net',
    description: 'Почта, на которую зарегистрирован аккаунт',
  })
  @IsEmail()
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;

  @ApiProperty({
    type: String,
    example: '12356asdsx_!.asdf',
    description: 'Пароль пользователя',
  })
  @IsString()
  @Length(6)
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'static/photo.jpg',
    description: 'Путь до аватарки пользователя',
  })
  @IsString()
  @IsOptional()
  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  declare photo?: string | null;

  @ApiProperty({
    type: Boolean,
    example: true,
    description: 'Находится ли пользователь сейчас онлайн',
  })
  @IsBoolean()
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare isOnline: boolean;

  @ApiProperty({
    type: String,
    example: '27.08.2022',
    description: 'Последняя дата захода в сеть',
  })
  @IsDate()
  @Column({
    type: DataType.STRING,
  })
  declare lastOnlineDate: string;
}
