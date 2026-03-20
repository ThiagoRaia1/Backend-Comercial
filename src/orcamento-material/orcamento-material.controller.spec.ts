import { Test, TestingModule } from '@nestjs/testing';
import { OrcamentoMaterialController } from './orcamento-material.controller';
import { OrcamentoMaterialService } from './orcamento-material.service';

describe('OrcamentoMaterialController', () => {
  let controller: OrcamentoMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrcamentoMaterialController],
      providers: [OrcamentoMaterialService],
    }).compile();

    controller = module.get<OrcamentoMaterialController>(OrcamentoMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
