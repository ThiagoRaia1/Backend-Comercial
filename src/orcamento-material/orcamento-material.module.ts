import { Module } from '@nestjs/common';
import { OrcamentoMaterialService } from './orcamento-material.service';
import { OrcamentoMaterialController } from './orcamento-material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrcamentoMaterial } from './entities/orcamento-material.entity';
import { Material } from 'src/material/entities/material.entity';
import { Orcamento } from 'src/orcamento/entities/orcamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrcamentoMaterial, Orcamento, Material])],
  controllers: [OrcamentoMaterialController],
  providers: [OrcamentoMaterialService],
})
export class OrcamentoMaterialModule {}
