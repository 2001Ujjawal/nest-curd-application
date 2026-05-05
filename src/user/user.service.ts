import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: Partial<User>) {
    try {
      const user = this.userRepository.create(data);
      return await this.userRepository.save(user);
    } catch (error) {
      if (error?.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException('email already exits');
      }
      throw new BadRequestException(error);
    }
  }

  greet(): string {
    return 'hello from user service to auth module';
  }
}
