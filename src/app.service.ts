import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.warn('hello world');
    return 'Hello dddd!';
  }
}
