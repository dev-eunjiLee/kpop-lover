import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  pickMode(): string {
    return 'Hello World!';
  }
}
