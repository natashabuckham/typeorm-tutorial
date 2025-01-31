import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }),)
  app.use((req, res, next) => {
    Logger.log(`Incoming request: ${req.method} ${req.url}`)
    Logger.log(`Body: ${JSON.stringify(req.body)}`)
    next()
  })
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
