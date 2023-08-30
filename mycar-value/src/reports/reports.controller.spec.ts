import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';

describe('ReportsController', () => {
  let controller: ReportsController;

  //check if the controller is defined
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
