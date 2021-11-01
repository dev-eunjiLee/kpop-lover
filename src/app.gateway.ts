import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

/**
 * https://velog.io/@kimgano12/NestJS-Socket.io-RN-Mysql%EB%A1%9C-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-1
 * server: 웹소켓 서버를 실행하는 주체
 * socket: 해당 서버에 연결되어 있는 각각의 클라이언트(소켓)
 */

@WebSocketGateway() // * 웹소켓 서버 실행 => socket.io 기능에 대한 엑세스 제공
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // * 프로퍼티, reflect에서 값이 넘어온다.
  // * reflect: 타깃을 중간에 가로채 작업을 할 수 있다(다시 돌려주기 때문에 타깃은 원래 작업 수행)
  // * 서버 객체
  @WebSocketServer() // * Attaches native Web Socket Server to a given property.
  server: Server;

  @SubscribeMessage('msgToServer')
  handleMeesage(client: Socket, payload: string): void {
    this.server.emit('msgToClient', payload);
  }

  // * 하단 afterInit, handleConnection, handleDisconnection은 애플리케이션의 일부 주요 상태를 기록하기 위해 사용
  private logger: Logger = new Logger('AppGateway');

  // * 처음 셋팅했을 때,
  afterInit(server: any): any {
    this.logger.log(`init: ${server}`);
  }

  // * 클라이언트 연결 했을 때
  handleConnection(client: any, ...args): any {
    this.logger.log(`Client connected: ${client.id}`);
  }

  // * 클라이언트 연결 끊었을 때
  handleDisconnect(client: any): any {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('events')
  getMessage(@MessageBody() data: string): string {
    console.log(data);
    return data;
  }
}
