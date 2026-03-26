import { OrcamentoMaterial } from 'src/orcamento-material/entities/orcamento-material.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @OneToMany(() => OrcamentoMaterial, (om) => om.material)
  orcamentos: OrcamentoMaterial[];
}