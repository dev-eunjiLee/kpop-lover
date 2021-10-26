import { Controller, Get, Param } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Get(':quizNumber')
  viewQuiz(@Param('quizNumber') quizNumber: string) {
    console.log('quizNumber');
  }
}
