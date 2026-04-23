import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/test-post')
  checkPostRequest(): object {
    console.log('hello this is post routes');
    return {
      success: 'hello',
    };
  }
}
