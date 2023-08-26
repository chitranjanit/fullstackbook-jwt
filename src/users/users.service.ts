import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entriy
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'chitra',
      password: 'chitranjan',
    },
    {
      userId: 2,
      username: 'sanjeep',
      password: 'sanjeep',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
