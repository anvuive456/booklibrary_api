import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  StreamableFile,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class CustomResponseInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map(function (data) {
        const statCode = context.switchToHttp().getResponse().statusCode;

        const result = data.data || data;
        const count = data.count;
        const page: number = data.page;
        const total_page = data.total_page || data.totalPage;

        return {
          timestamp: new Date().getTime(),
          statusCode: statCode,
          // message,
          message: 'success',
          count,
          page: page as number,
          totalPage: total_page,
          data: result,
        };
      }),
    );
  }
}
