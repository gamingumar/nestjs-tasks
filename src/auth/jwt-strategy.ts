/*
 * File: jwt-strategy.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 8:18:21 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 17th April 2020 11:02:34 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtPayload } from './jwt-payload.interface'
import { InjectRepository } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'guSecret94'
    })
  }

  async validate(payload: JwtPayload) {
    const {username} = payload;
    const user = await this.userRepository.findOne({ username })

    if (!user) {
      throw new UnauthorizedException()
    }

    return user;
  } 
}