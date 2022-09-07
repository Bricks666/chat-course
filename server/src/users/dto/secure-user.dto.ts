import { PickType } from '@nestjs/swagger';
import { User } from '../models/user.model';

export class SecureUserDto extends PickType(User, [
  'userId',
  'email',
  'name',
  'photo',
  'isOnline',
  'lastOnlineDate',
]) {}
