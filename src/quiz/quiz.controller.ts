import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Get(':quizNumber')
  @Render('viewQuiz')
  viewQuiz(@Param('quizNumber') quizNumber: string) {
    const returnObj = {
      message: 'Hello world',
      quizNumber: quizNumber,
    };
    return returnObj;
  }
}
