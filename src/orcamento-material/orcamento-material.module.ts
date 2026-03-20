import { Module } from '@nestjs/common';
import { OrcamentoMaterialService } from './orcamento-material.service';
import { OrcamentoMaterialController } from './orcamento-material.controller';

@Module({
  controllers: [OrcamentoMaterialController],
  providers: [OrcamentoMaterialService],
})
export class OrcamentoMaterialModule {}
