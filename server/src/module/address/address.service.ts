import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { Address } from '../../@generated/address/address.model';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async getAddressByProfileId(id): Promise<Address[] | null> {
    return this.prisma.address.findMany({
      where: {},
    });
  }
}
