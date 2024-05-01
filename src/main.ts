import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ //si existe un Dto se validan las clases y los campos extra en el body se ignoran.
    whitelist: true
  }));

  // Configuracion de documnetacion con swagger.

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Configurar los dominios que pueden acceder al servidor.
  app.enableCors(
    {
      origin: 'https://localhost:2000'
    }
  );

  await app.listen(3000);
}
bootstrap();
