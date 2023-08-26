import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';

// This should be a real class/interface representing a user entriy
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'chitra',
      password: 'chitranjan',
      roles: [Role.Admin],
    },
    {
      userId: 2,
      username: 'sanjeep',
      password: 'sanjeep',
      roles: [Role.User],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
