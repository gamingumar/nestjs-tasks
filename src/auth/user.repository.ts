/*
 * File: user.repository.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 12:37:00 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 17th April 2020 2:14:12 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { password, username } = authCredentialsDto

    const user = new User();

    user.username = username
    user.password = password

    try {
      await user.save()
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('Username already exists...');
      } else {
        throw new InternalServerErrorException()
      }
    }
  }
}