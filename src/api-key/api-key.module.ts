import { Module } from '@nestjs/common';
import { ApiKeyService } from './api-key.service';
import { ApiKeysGuard } from './api-key.guard';

@Module({
  imports: [],
  providers: [ApiKeyService, ApiKeysGuard],
  exports: [ApiKeyService, ApiKeysGuard],
})
export class ApiKeysModule {}
