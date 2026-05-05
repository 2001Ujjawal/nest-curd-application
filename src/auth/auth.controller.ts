import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  async login() {
    return await this.authService.jwtToken();
  }
  @Get()
  importUserServiceTest(): object {
    return { message: this.authService.checkImportUserService() };
  }
}
