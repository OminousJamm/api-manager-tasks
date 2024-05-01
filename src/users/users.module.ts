import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // Configuracion de Middleware por rutas.
    consumer.apply(LoggerMiddleware).forRoutes('users').
    apply(AuthMiddleware).forRoutes('users');
    /**
    consumer.apply(LoggerMiddleware).forRoutes(
    {path: 'users', method: RequestMethod.GET},
    {path: 'users', method: RequestMethod.POST}
  );
  */
  }
  
}
