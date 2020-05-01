/*
 * File: main.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 2:12:50 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 30th April 2020 5:58:54 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const serverConfig: any = config.get('server');
  const logger = new Logger('bootstrap');

  const port = process.env.PORT || serverConfig.port;

  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors()
  } else {
    // app.enableCors({
    //   origin
    // })
  }

  const options = new DocumentBuilder()
    .setTitle('Tasks example API')
    .setDescription('The tasks API description')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  logger.log(`Application listening on the port: ${port}`)
}
bootstrap();
