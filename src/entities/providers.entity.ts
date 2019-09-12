import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { AddressProvider } from './address_provider.entity';
import { Categories } from './categories.entity';

@Entity()
export class Providers {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  providerName: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  providerId: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  companyId: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  partnerId: number;

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

  @OneToMany(type => AddressProvider, addressProvider => addressProvider.provider)
  @JoinColumn()
  // tslint:disable-next-line:variable-name
  address_providers: AddressProvider[];

  @OneToMany(type => Categories, categories => categories.provider)
  @JoinColumn()
  categories: Categories[];
}
