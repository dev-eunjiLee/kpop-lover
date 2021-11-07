import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { UserModule } from './user/user.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [QuizModule, UserModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
