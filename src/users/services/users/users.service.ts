import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User, SerializedUser } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'anson',
      password: 'anson',
    },
    {
      username: 'dany',
      password: 'dany',
    },
    {
      username: 'abc',
      password: 'abc',
    },
    {
      username: 'jkl',
      password: 'jkl',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }
  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
