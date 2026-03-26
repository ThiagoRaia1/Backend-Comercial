import { Module } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';
import { OrcamentoController } from './orcamento.controller';
import { OrcamentoMaterial } from 'src/orcamento-material/entities/orcamento-material.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from 'src/material/entities/material.entity';
import { Orcamento } from './entities/orcamento.entity';
import { GatewayModule } from 'src/gateway/gateway.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orcamento, Material, OrcamentoMaterial]),
    GatewayModule,
  ],
  controllers: [OrcamentoController],
  providers: [OrcamentoService],
})
export class OrcamentoModule {}
