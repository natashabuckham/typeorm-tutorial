import { Test, TestingModule } from '@nestjs/testing';
import { MortgagesController } from './mortgages.controller';
import { MortgagesService } from './mortgages.service';

describe('MortgagesController', () => {
  let controller: MortgagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MortgagesController],
      providers: [MortgagesService],
    }).compile();

    controller = module.get<MortgagesController>(MortgagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
