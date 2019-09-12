import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Categories } from './categories.entity';
import { Details } from './details.entity';

@Entity({
  name: 'details_category',
  schema: 'public',
})
export class DetailsCategory {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  categoryName: string;

  @OneToMany(type => Categories, categories => categories.categoryName)
  @JoinColumn()
  categories: Categories[];

  @OneToMany(type => Details, details => details.detailsCategory)
  @JoinColumn()
  details: Details[];
}
