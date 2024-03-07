import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ApiKeyService } from './api-key.service';

@Injectable()
export class ApiKeysGuard implements CanActivate {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['api-key'];

    if (!apiKey) {
      return false;
    }

    const isValidApiKey = await this.apiKeyService.validate(apiKey);

    if (!isValidApiKey) {
      return false;
    }

    return true;
  }
}
