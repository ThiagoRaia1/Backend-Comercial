import { Test, TestingModule } from '@nestjs/testing';
import { OrcamentoMaterialService } from './orcamento-material.service';

describe('OrcamentoMaterialService', () => {
  let service: OrcamentoMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrcamentoMaterialService],
    }).compile();

    service = module.get<OrcamentoMaterialService>(OrcamentoMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
