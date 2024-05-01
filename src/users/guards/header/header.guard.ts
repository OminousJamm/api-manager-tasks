import { CanActivate, ExecutionContext, Injectable, Request } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req = context.switchToHttp().getRequest() as Request;
    console.log(req.url);
    console.log(req.headers);

    if(!req.headers['guard']) {
      return false;
    }

    return true;
  }
}
