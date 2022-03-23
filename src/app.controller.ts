import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { Body, Controller, Get, InternalServerErrorException, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { FreezePipe } from './pipes/freeze.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
//   @UseGuards(AuthGuard)
// @UseInterceptors(LoggingInterceptor)
// @UseFilters()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseGuards(FreezePipe) // this would apply to all the arguments in our call
  examplePost(@Body(new FreezePipe()) body: any) {
    body.test= 32;
  }

  @Get('error')
  throwError() {
      throw new InternalServerErrorException();
  }

}
