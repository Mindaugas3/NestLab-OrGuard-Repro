import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class AlwaysFalseGuard implements CanActivate {
  async canActivate() {
    return false;
  }
}
