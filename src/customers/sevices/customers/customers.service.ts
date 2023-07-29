import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'danny1@gmail.com',
      name: 'danny1',
    },
    {
      id: 2,
      email: 'danny2@gmail.com',
      name: 'danny2',
    },
    {
      id: 3,
      email: 'danny3@gmail.com',
      name: 'danny3',
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.users.push(customerDto);
  }
  getCustomer() {
    return this.users;
  }
}
