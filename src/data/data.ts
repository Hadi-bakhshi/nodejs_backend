import bcrypt from "bcryptjs";

interface User {
  id:number;
  name: string;
  username: string;
  password: string;
  role: string;
  roleId: number;
}

export const users: User[] = [
  {
    id:12,
    name: "hadibakhshi",
    username: "hadi",
    password: bcrypt.hashSync("1234", 8),
    role: "admin",
    roleId: 1,
  },
  {
    id:13,
    name: "johnZ",
    username: "john",
    password: bcrypt.hashSync("1234", 8),
    role: "client",
    roleId: 2,
  },
];
