/*
 * File: auth.controller.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 12:29:23 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 17th April 2020 2:13:32 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ){}

  @Post('/signup')
  async signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto)
  }
}
