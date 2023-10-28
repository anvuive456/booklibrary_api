import { Test, TestingModule } from '@nestjs/testing';
import { RedemptionGateway } from './redemption.gateway';

describe('RedemptionGateway', () => {
  let gateway: RedemptionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedemptionGateway],
    }).compile();

    gateway = module.get<RedemptionGateway>(RedemptionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
