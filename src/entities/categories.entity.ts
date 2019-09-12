import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Details } from './details.entity';
import { DetailsCategory } from './detailsCategory.entity';
import { Providers } from './providers.entity';
import { Technologies } from './technologies.entity';

@Entity({
  name: 'categories',
  schema: 'public',
})
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => DetailsCategory, detailsCategory => detailsCategory.categories)
  @JoinColumn()
  categoryName: DetailsCategory;

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

  @ManyToOne(type => Providers, providers => providers.categories)
  @JoinColumn()
  provider: Providers;

  @ManyToOne(type => Details, details => details.categories)
  @JoinColumn()
  details: Details;

  @OneToMany(type => Technologies, technologies => technologies.category)
  @JoinColumn()
  technologies: Technologies[];
}
