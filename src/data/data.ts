import bcrypt from 'bcryptjs';

interface User {
  _id: string;
  id: number;
  name: string;
  username: string;
  password: string;
  role: string;
  roleId: number;
}

export const users: User[] = [
  {
    _id: '12',
    id: 12,
    name: 'hadibakhshi',
    username: 'hadi',
    password: bcrypt.hashSync('1234', 8),
    role: 'admin',
    roleId: 1,
  },
  {
    _id: '13',
    id: 13,
    name: 'johnZ',
    username: 'john',
    password: bcrypt.hashSync('1234', 8),
    role: 'client',
    roleId: 2,
  },
];

export const privateContent = [
  {
    title: 'this is the private content title',
    content: ' this is the private content',
  },
];
export const publicContent = [
  {
    title: 'this is the public content title',
    content: ' this is the public content',
  },
];
