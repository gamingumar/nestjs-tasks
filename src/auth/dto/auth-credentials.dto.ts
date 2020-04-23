/*
 * File: auth-credentials.dto.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 12:42:07 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 24th April 2020 12:51:00 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)  
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {message: 'Password too weak'}
  )
  password: string;
}