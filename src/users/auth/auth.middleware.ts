import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const {autorization} = req.headers;

    if(!autorization){
      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
    }

    if(autorization !== 'xyz'){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    
    next();
  }
}
