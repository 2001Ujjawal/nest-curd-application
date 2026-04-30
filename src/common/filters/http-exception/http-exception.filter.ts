import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status = exception.getStatus();
    const exceptionRes: any = exception.getResponse();

    response.status(status).json({
      status: false,
      statusCode: status,
      message: exceptionRes.message || 'Error',
      data: null,
      error: exceptionRes,
    });
  }
}
