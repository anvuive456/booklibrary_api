import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { ZodValidationException } from 'nestjs-zod';

@Catch(ZodError)
export class ZodErrorFilter implements ExceptionFilter<ZodError> {
  catch(exception: ZodError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log(exception);
    const message = exception.issues.map((issue) => issue.message).join('. ');

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      timestamp: new Date().getTime(),
      path: request.url,
      message,
    });
  }
}

@Catch(ZodValidationException)
export class ZodValidationFilter
  implements ExceptionFilter<ZodValidationException>
{
  catch(exception: ZodValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log(exception);
    const message = exception
      .getZodError()
      .issues.map(
        (err) =>
          err.path.reduce(
            (previousValue, currentValue) =>
              previousValue + ', ' + currentValue,
          ) +
          ': ' +
          err.message,
      );

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      timestamp: new Date().getTime(),
      path: request.url,
      message,
    });
  }
}
