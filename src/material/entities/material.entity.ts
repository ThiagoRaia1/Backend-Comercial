import { OrcamentoMaterial } from 'src/orcamento-material/entities/orcamento-material.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @OneToMany(() => OrcamentoMaterial, (orcamentoMaterial) => orcamentoMaterial.material)
  orcamentos: OrcamentoMaterial[];
}
