// import {
//   SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
//   WsResponse,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
// } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';
// import { Logger } from '@nestjs/common';
//
// const RedemptionEvent = {
//   roomCreated: 'room-created',
//   noMerchantId: 'no-merchant-id',
//   receiveQr: 'qr-received',
// };
//
// const RedemptionMessage = {
//   sendQr: 'send-qr',
// };
//
// @WebSocketGateway({
//   namespace: 'redemption',
//   cors: {
//     origin: '*',
//   },
//   transports: ['websocket'],
// })
// export class RedemptionGateway
//   implements OnGatewayConnection, OnGatewayDisconnect
// {
//   private logger = new Logger('ChatGateway');
//   rooms: string[] = [];
//
//   @WebSocketServer() server = new Server();
//
//   //create room for when merchant connect to server
//
//   async handleConnection(client: Socket) {
//     this.logger.log(client.id);
//     const room = client.handshake.query.merchantId;
//     if (!room) client.emit(RedemptionEvent.noMerchantId);
//
//     if (Array.isArray(room)) this.rooms = [...this.rooms, ...room];
//     else this.rooms.push(room);
//
//     client.join(room);
//
//     client.emit(RedemptionEvent.roomCreated, [client.rooms]);
//   }
//
//   async handleDisconnect(client: Socket) {
//     const index = this.rooms.indexOf(client.rooms[client.id]);
//     if (index === -1) return client.emit('');
//   }
//
//   @SubscribeMessage(RedemptionMessage.sendQr)
//   async sendQr(
//     data: {
//       merchantId: string;
//       userId: string;
//     },
//     client: Socket,
//   ) {
//     if (this.rooms.find((room) => room == data.merchantId)) {
//       return this.server
//         .to(data.merchantId)
//         .emit(RedemptionEvent.receiveQr, [data.userId]);
//     }
//   }
// }
