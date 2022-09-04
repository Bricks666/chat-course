import { PickType } from '@nestjs/swagger';
import { User } from '../models/user.model';

export class CreateUserDto extends PickType(User, [
  'name',
  'email',
  'password',
  'photo',
  'isOnline',
  'lastOnlineDate',
]) {}
