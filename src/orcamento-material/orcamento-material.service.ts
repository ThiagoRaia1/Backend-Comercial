import { Injectable } from '@nestjs/common';
import { CreateOrcamentoMaterialDto } from './dto/create-orcamento-material.dto';
import { UpdateOrcamentoMaterialDto } from './dto/update-orcamento-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from 'src/material/entities/material.entity';
import { Orcamento } from 'src/orcamento/entities/orcamento.entity';
import { Repository } from 'typeorm';
import { OrcamentoMaterial } from './entities/orcamento-material.entity';

@Injectable()
export class OrcamentoMaterialService {
  constructor(
    @InjectRepository(Orcamento)
    private orcamentoRepository: Repository<Orcamento>,

    @InjectRepository(Material)
    private materialRepository: Repository<Material>,

    @InjectRepository(OrcamentoMaterial)
    private orcamentoMaterialRepository: Repository<OrcamentoMaterial>,
  ) {}

  create(createOrcamentoMaterialDto: CreateOrcamentoMaterialDto) {
    return 'This action adds a new orcamentoMaterial';
  }

  async findAll() {
    return this.orcamentoRepository.find({
      relations: {
        materiais: {
          material: true,
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} orcamentoMaterial`;
  }

  update(id: number, updateOrcamentoMaterialDto: UpdateOrcamentoMaterialDto) {
    return `This action updates a #${id} orcamentoMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} orcamentoMaterial`;
  }
}
