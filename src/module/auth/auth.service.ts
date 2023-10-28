import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Role, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async comparePassword(
    password: string,
    storePasswordHash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, storePasswordHash);
  }

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);
    console.warn(user);
    if (!user) return null;

    if (!(await this.comparePassword(pass, user.password))) {
      console.log(await this.hashPassword(pass), user.password);
      return null;
    }

    return user;
  }

  async signIn(user: User) {
    return {
      access_token: this.jwtService.sign(user, { secret: jwtConstants.secret }),
    };
  }

  async signUp(username, password, role: Role) {
    switch (role) {
      case 'member':
        return await this.userService.createMember(
          username,
          await this.hashPassword(password),
        );
      case 'librarian':
        return await this.userService.createLibrarian(
          username,
          await this.hashPassword(password),
        );
      case 'admin':
      //TODO: implements admin sign up
    }
  }
}
