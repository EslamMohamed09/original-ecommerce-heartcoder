import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): string {
    return 'Hello Eslam to nestjs';
  }

  getContact(): string {
    return 'contact us page';
  }

  getPrivacyPolicyPage(): string {
    return 'privacy policy page';
  }
}
