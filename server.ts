import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/user';
// import getSUsr from './routes/posts';
import { PrismaClient } from '@prisma/client';
// const sql = require('mssql');
const prisma = new PrismaClient();
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/user', router);

app.get('/myuserishere', (req, res) => {
  async function main() {
    // await prisma.user.create({
    //   data: {
    //     name: 'هادی بخشی',
    //     username: 'hadi',
    //     password: '1234',
    //     role: 'admin',
    //     roleId: 1,
    //   },
    // });

    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
    console.dir(allUsers, { depth: null });
    res.json(allUsers);
  }
  main();
});

app.listen(port, () => {
  return console.log(`Express is listening at ${port}`);
});

// app.use('/api/users', getSUsr);

// const config = {
//   server: 'localhost\\MHADMIN',
//   port: 1433,
//   user: 'sa',
//   password: '986532147',
//   database: 'Hadi',
//   options: {
//     enableArithAbort: true,
//   },
//   trustServerCertificate: true,
//   connectionTimeout: 150000,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
// };
// sql.on('error', (err) => {
//   console.log(err.message);
// });

// async function getDBUsers() {
//   try {
//     let pool = await sql.connect(config);
//     let result = await pool.request().query('SELECT * FROM Hadi.dbo.[User]');
//     console.log('successful', result);
//     sql.close();
//   } catch (error) {
//     console.log('error khord', error);
//     sql.close();
//   }
// }

// app.get('/', (req, res) => {
//   let mydata = getDBUsers();
//   res.send({ data: mydata });
// });
