import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWelcome(): string {
    return this.appService.getWelcome();
  }

  @Get('/contact')
  getContact(): string {
    return this.appService.getContact();
  }

  @Get('privacy_policy')
  getPrivacyPolicyPage(): string {
    return this.appService.getPrivacyPolicyPage();
  }
}
