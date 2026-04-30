import type { Response } from 'express';
import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UserService } from './user.service';
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
}
