import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressProvider } from './address_provider.entity';

@Entity({
  name: 'address',
  schema: 'public',
})
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  city: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  state: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  zip: string;

//  One To Many relations
  @OneToMany(type => AddressProvider, addressProvider => addressProvider.address)
  @JoinColumn()
    // tslint:disable-next-line:variable-name
  address_providers: AddressProvider[];
}
