import type { Response } from 'express';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async createUser(@Body() user: CreateUserDto) {
    const addUser = await this.userService.create(user);
    return { user: addUser };
  }

  @Get('/')
  findAllUsers(@Res() res: Response) {
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Users fetched successfully',
      data: [],
      error: null,
    });
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() user: CreateUserDto) {
    return {
      requestID: id,
      data: user,
    };
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    const tokenUserValue = req.user;
    console.log('=================tokenUserValue', tokenUserValue);
    return 'hello';
  }
}
