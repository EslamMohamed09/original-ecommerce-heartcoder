import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel('product') private productModel: Model<any>,
  ) {}

  @Get()
  getWelcome(): string {
    return this.appService.getWelcome();
  }

  @Get('contact')
  getContact(): string {
    return this.appService.getContact();
  }

  @Get('privacy-policy')
  getPrivacyPolicyPage(): string {
    return this.appService.getPrivacyPolicyPage();
  }

  @Get('create-product')
  async createProduct() {
    return this.productModel.create({
      id:'1',
      title: 'dell 5580',
      description: 'workstation laptop',
      price: 2500,
      imageUrl:'https://example.com/dell-5580.jpg',
    }
    )
  }
}
