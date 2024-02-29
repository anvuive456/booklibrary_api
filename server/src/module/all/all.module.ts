import { Module } from '@nestjs/common';
import { AllController } from './all.controller';
import { PrismaModule } from "../../db/prisma.module";
import { AllService } from './all.service';

@Module({
  imports:[PrismaModule],
  controllers: [AllController],
  providers: [AllService]
})
export class AllModule {}
