import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';
import { AppString } from '../../../common/app_string';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'username' });
    // ở đây mình đăng nhập bằng email và password nên mình phải thực hiện custom usernameField
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(username, password);
    console.log('validate', user);
    if (!user) {
      throw new UnauthorizedException(AppString.errNoAuth);
    }

    return user;
  }
}
