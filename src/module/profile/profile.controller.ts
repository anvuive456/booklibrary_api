import {
  Controller,
  Request,
  Get,
  UseGuards,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { UpdateOrInsertProfileDto } from './profile.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @UseGuards(AuthenticationGuard)
  @Get()
  async getMyProfile(@Request() req) {
    return this.profileService.getMyProfile(req.user.id);
  }

  /**
   * @param req
   * @param dto: UpdateOrInsertProfileDto
   */
  @ApiBearerAuth('Bearer')
  @UseGuards(AuthenticationGuard)
  @Put()
  async updateProfile(@Request() req, @Body() dto: UpdateOrInsertProfileDto) {
    return this.profileService.updateProfile(req.user.id, dto);
  }
}
