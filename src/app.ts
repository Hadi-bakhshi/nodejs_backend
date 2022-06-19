import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/user';
import postRouter from './routes/posts';
const sql = require('mssql');
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/user', router);
app.use('/api/posts', postRouter);

const config = {
  server: 'localhost\\MHADMIN',
  port: 1433,
  user: 'sa',
  password: '986532147',
  database: 'Hadi',
  options: {
    enableArithAbort: true,
  },
  trustServerCertificate: true,
  connectionTimeout: 150000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};
sql.on('error', (err) => {
  console.log(err.message);
});

async function getDBUsers() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT * FROM Hadi.dbo.[User]');
    console.log('successful', result);
    sql.close();
  } catch (error) {
    console.log('error khord', error);
    sql.close();
  }
}

app.get('/', (req, res) => {
  let mydata = getDBUsers();
  res.send({ data: mydata });
});

app.listen(port, () => {
  return console.log(`Express is listening at ${port}`);
});
