import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('special')
  getAllSpecial() {
    return this.appService.getAllSpecial();
  }

  @Post('special')
  storeSpecial() {
    return this.appService.storeSpecial();
  }

  @Post('order')
  storeOrder() {
    return this.appService.storeOrder();
  }
}
