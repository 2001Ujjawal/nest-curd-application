import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/service-function-test')
  async serviceFunctionTest() {
    const userList = await this.userService.findAllUser();
    console.log('=========user data', userList);
    console.log('----------------- user controller', process.env.HELLO);
    return this.userService.greet();
  }

  @Get('/users')
  findAllV1(@Query('name') name?: string) {
    console.log('=================', name);
    if (name === undefined || name === null || name === '') {
      return 'n/A';
    }
    return name;
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }

  @Get('')
  findAll(@Query() query: { name?: string; email?: string; status: boolean }) {
    return query;
  }
  @Post('/users')
  create(@Body() CreateUserDto: CreateUserDto): { user: CreateUserDto } {
    try {
      return { user: CreateUserDto };
    } catch (error) {
      console.log('================= user create', error);
      throw new BadRequestException('Something went wrong');
    }
  }
}
