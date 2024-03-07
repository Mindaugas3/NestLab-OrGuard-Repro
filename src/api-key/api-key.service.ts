import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyService {
  async validate(apiKey: string): Promise<boolean> {
    return apiKey === '1234567890';
  }
}
