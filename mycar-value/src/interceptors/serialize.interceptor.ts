import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log('I am running before the handler', context);
    console.log('I am running before the handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        console.log('I am running after the handler', data);
      }),
    );
  }
}
