# nestjs-tasks
Nest JS Tasks management API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Tasks CRUD API implemented in NestJS, with custom route guarding and authentication. 

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start | nest start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Migrations
```
yarn typeorm migration:run

yarn typeorm migration:revert
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Twitter - [@UmarCloud](https://twitter.com/UmarCloud)

## License

  Nest is [MIT licensed](LICENSE).


# Notes


### Creating Module:

``` nest g module name ```

### Controller

- generate a controller without tests spec

``` nest g controller name —no-spec ```

### Service

- generate a service without tests spec

``` nest g service name —no-spec ```

### DTO

- (Data transfer Object)

```
dto/module.dto.ts
module.controller.ts
module.entity.ts
module.module.ts
module.repository.ts
module.service.ts
```

### entity
```
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Module extends BaseEntity {
}
```

### repository
```
import { Repository, EntityRepository } from "typeorm";
import { Logger, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(T)
export class ModuleRepository extends Repository<T>{
}
```

### TypeOrm

- Create Postgres Database (pgadmin  and postgres)

``` yarn add @nestjs/typeorm typeorm p ```

### Documentation
``` npx compodoc -p tsconfig.json -s ```

### Defining Guards (Role Based Authentication)

```
@UseGuards(RolesGuard)

@CanAccess(UserTypes.Admin)
```


### Dependencies:

```
yarn add @nestjs/jwt @nestjs/passport @nestjs/swagger @nestjs/typeorm typeorm passport passport-jwt pg bcrypt class-transformer class-validator config swagger-ui-express

yarn add -D @compodoc/compodoc @types/bcrypt @types/config
```