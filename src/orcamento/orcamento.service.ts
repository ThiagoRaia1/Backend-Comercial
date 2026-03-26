import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { Orcamento } from './entities/orcamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from 'src/material/entities/material.entity';
import { OrcamentoMaterial } from 'src/orcamento-material/entities/orcamento-material.entity';
import { MyGateway } from 'src/gateway/gateway';

@Injectable()
export class OrcamentoService {
  constructor(
    @InjectRepository(Orcamento)
    private orcamentoRepository: Repository<Orcamento>,

    @InjectRepository(Material)
    private materialRepository: Repository<Material>,

    @InjectRepository(OrcamentoMaterial)
    private orcamentoMaterialRepository: Repository<OrcamentoMaterial>,

    private readonly gateway: MyGateway,
  ) {}

  async create(createOrcamentoDto: CreateOrcamentoDto) {
    const { materiais, ...orcamentoData } = createOrcamentoDto;

    // salva o orçamento primeiro (PRECISA ter ID)
    const orcamento = await this.orcamentoRepository.save(
      this.orcamentoRepository.create({
        ...orcamentoData,
        status: createOrcamentoDto.status || 'PENDENTE',
      }),
    );

    const orcamentoMateriais: OrcamentoMaterial[] = [];

    // processa materiais
    for (const item of materiais) {
      if (!item.nome) continue;

      const precoNum = Number(String(item.preco).replace(',', '.')) || 0;

      let material = await this.materialRepository.findOne({
        where: { nome: item.nome },
      });

      if (!material) {
        material = await this.materialRepository.save(
          this.materialRepository.create({
            nome: item.nome,
            preco: precoNum,
          }),
        );
      }

      const om = this.orcamentoMaterialRepository.create({
        material,
        orcamento, // agora tem ID
        preco: precoNum,
      });

      orcamentoMateriais.push(om);
    }

    // salva os relacionamentos SEPARADO
    await this.orcamentoMaterialRepository.save(orcamentoMateriais);

    // retorna o orçamento (opcional: com relations)
    return this.orcamentoRepository.findOne({
      where: { id: orcamento.id },
      relations: ['materiais', 'materiais.material'],
    });
  }

  async findAll() {
    return this.orcamentoRepository.find({
      relations: ['materiais'],
    });
  }

  async findOne(id: number) {
    return await this.orcamentoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOrcamentoDto: UpdateOrcamentoDto) {
    const orcamento = await this.findOne(id);

    if (!orcamento) {
      throw new NotFoundException();
    }

    Object.assign(orcamento, updateOrcamentoDto);

    const orcamentoAtualizado = await this.orcamentoRepository.save(orcamento);

    this.gateway.emitirOrcamentoAtualizado(orcamentoAtualizado);

    return orcamentoAtualizado;
  }

  remove(id: number) {
    return `This action removes a #${id} orcamento`;
  }
}
