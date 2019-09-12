import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Providers } from './providers.entity';

@Entity({
  name: 'address_providers',
  schema: 'public',
})
export class AddressProvider {
  id: number;

//  Many to One relations

  @ManyToOne(type => Providers, providers => providers.address_providers)
  @JoinColumn()
  provider: Providers;

  @ManyToOne(type => Address, address => address.address_providers)
  @JoinColumn()
  address: Address;
}
