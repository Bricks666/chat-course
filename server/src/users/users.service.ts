import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, SecureUserDto } from './dto';
import { User } from './models/user.model';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@Inject(User) private userRepository: typeof User) {}

  async getUsers(): Promise<SecureUserDto[]> {
    return await this.userRepository.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async getUser(userId: number): Promise<SecureUserDto | undefined> {
    return await this.userRepository.findOne({
      where: {
        userId,
      },
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async createUser(dto: CreateUserDto): Promise<SecureUserDto> {
    const hashPassword = await hash(
      dto.password,
      Number(process.env.SALT_ROUND),
    );
    const user = await this.userRepository.create({
      ...dto,
      password: hashPassword,
    });

    return this.#toSecureUser(user);
  }

  #toSecureUser(user: User): SecureUserDto {
    return {
      email: user.email,
      isOnline: user.isOnline,
      userId: user.userId,
      lastOnlineDate: user.lastOnlineDate,
      name: user.name,
      photo: user.photo,
    };
  }
}
