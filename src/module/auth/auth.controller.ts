import {
  Body,
  Controller,
  Inject,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AppString } from '../../common/app_string';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthenticationGuard } from './guards/auth.guard';
import { Role } from '@prisma/client';
import { SignInDto, SignUpDto } from './auth.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiParam,
  ApiSecurity,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  @ApiBody({
    type: SignInDto,
    examples: {
      default: {
        value: {
          username: 'anvuive456',
          password: 'antran123A1!',
        } as SignInDto,
      },
    },
  })
  async signIn(@Request() req, @Body() body: SignInDto) {
    console.log(req);
    return this.authService.signIn(req.user);
  }

  @UseGuards(AuthenticationGuard)
  @ApiSecurity('Bearer')
  @Get('me')
  async getMe(@Request() req) {
    return this.userService.findById(req.user.id);
  }

  @Post('librarian/sign-up')
  async signUp(@Body() body: SignUpDto) {
    return await this.authService.signUp(
      body.username,
      body.password,
      Role.librarian,
    );
  }

  @Post('member/sign-up')
  async signUpMember(@Body() body: SignUpDto) {
    return await this.authService.signUp(
      body.username,
      body.password,
      Role.member,
    );
  }
}
