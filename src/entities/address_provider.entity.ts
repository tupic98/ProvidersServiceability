import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';

@Entity({
  name: 'address_providers',
  schema: 'public',
})
export class AddressProvider {
  id: number;

//  Many to One relations

  // provider: Providers

  @ManyToOne(type => Address, address => address.address_providers)
  @JoinColumn()
  address: Address;
}
