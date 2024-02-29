import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { PrismaModule } from '../../db/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
