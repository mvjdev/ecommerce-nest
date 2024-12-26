import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from "dotenv";

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn", "log", "verbose"],
  });
  
  app.enableCors(); //n'oubliez pas pour supprimer le cors
  await app.listen(5000);
}

bootstrap();
