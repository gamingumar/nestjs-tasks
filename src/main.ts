/*
 * File: main.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 2:12:50 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Monday, 20th April 2020 9:38:26 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config'

async function bootstrap() {
  const serverConfig:any = config.get('server');
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

  await app.listen(port);
  logger.log(`Application listening on the port: ${port}`)
}
bootstrap();
