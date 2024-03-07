import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { OrGuard } from '@nest-lab/or-guard';
import { ApiKeysGuard } from './api-key/api-key.guard';
import { AlwaysFalseGuard } from './guards/always-false';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(OrGuard([ApiKeysGuard, AlwaysFalseGuard]))
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
