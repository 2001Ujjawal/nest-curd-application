import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Put,
  HttpStatus,
  Query,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('query-routes')
  queryRoutes(@Query('name') name?: string) {
    if (name) {
      return `Searching for ${name}`;
    }
    return 'No name provided';
  }

  @Get('/users/:id')
  pramsRoutes(@Param('id') id: string) {
    return { id };
  }

  @Put('/test-put')
  checkPutController(): string {
    return 'hello put ';
  }

  @Post('/post-routes')
  create(@Body() user: {}): object {
    return user;
  }
}
