import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  checkImportUserService(): string {
    return this.userService.greet();
  }

  async jwtToken() {
    const payload = { sub: 1, username: 'hello' };
    const generateToken = await this.jwtService.signAsync(payload);
    if (!generateToken) {
      throw new ForbiddenException('token generate failed');
    }
    return { token: generateToken };
  }
}
