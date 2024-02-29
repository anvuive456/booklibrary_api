import { Controller, Get } from '@nestjs/common';
import { AllService } from './all.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('all')
@Controller('all')
export class AllController {
  constructor(private service: AllService) {}

  @Get('')
  async getAll() {
    return this.service.getAll();
  }
}
