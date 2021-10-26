import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Get(':quizNumber') // * quizNumber: 파라미터
  @Render('viewQuiz') // * 해당 파일 이름의 pug 파일을 렌더링
  viewQuiz(@Param('quizNumber') quizNumber: string) {
    const returnObj = {
      // * 전달 객체
      message: 'Hello world',
      quizNumber: quizNumber,
    };
    return returnObj;
  }
}
