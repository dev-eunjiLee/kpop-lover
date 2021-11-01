import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway(8000, { transports: 'websocket' }) // * 웹소켓 서버 실행
export class AppGateway {
  constructor() {
    console.log('here is AppGateway');
  }

  @SubscribeMessage('events')
  getMessage(@MessageBody() data: string): string {
    console.log(data);
    return data;
  }
}
