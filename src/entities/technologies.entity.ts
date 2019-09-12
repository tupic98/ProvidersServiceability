import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Details } from './details.entity';
import { Categories } from './categories.entity';

@Entity()
export class Technologies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  technologyName: string;

  @Column({
    type: 'real',
    nullable: true,
  })
  serviceable: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  datacount: number;

  @ManyToOne(type => Details, details => details.technologies)
  @JoinColumn()
  details: Details;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  dataGranularity: string;

  @ManyToOne(type => Categories, categories => categories.technologies)
  @JoinColumn()
  category: Categories;
}
