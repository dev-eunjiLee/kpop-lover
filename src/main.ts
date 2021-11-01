import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Socket } from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public')); // * public 디렉토리에 정적 자산을 저장
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // * html 출력 렌더링
  app.setViewEngine('pug');

  await app.listen(3000);
}
bootstrap().then();
