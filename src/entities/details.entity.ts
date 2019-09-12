import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categories } from './categories.entity';
import { type } from 'os';
import { DetailsCategory } from './detailsCategory.entity';
import { Technologies } from './technologies.entity';

@Entity({
  name: 'details',
  schema: 'public',
})
export class Details {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => DetailsCategory, detailsCategory => detailsCategory.details)
  @JoinColumn()
  detailsCategory: DetailsCategory;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  minPrice: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  maxDownloadSpeed: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  maxDownloadSpeedUnit: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  minDownloadSpeed: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  minDownloadSpeedUnit: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  minChannels: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  maxChannels: string;

  @OneToMany(type => Categories, categories => categories.details)
  @JoinColumn()
  categories: Categories[];

  @OneToMany(type => Technologies, technologies => technologies.details)
  @JoinColumn()
 technologies: Technologies[];
}
