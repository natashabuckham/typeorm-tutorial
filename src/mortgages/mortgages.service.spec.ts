import { Test, TestingModule } from '@nestjs/testing';
import { MortgagesService } from './mortgages.service';

describe('MortgagesService', () => {
  let service: MortgagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MortgagesService],
    }).compile();

    service = module.get<MortgagesService>(MortgagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
