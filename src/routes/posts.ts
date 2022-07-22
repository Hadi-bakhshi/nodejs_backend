// import express, { Request, Response } from 'express';
// import expressAsyncHandler from 'express-async-handler';
// import { privateContent, publicContent, users } from '../data/data';
// import { isAuth } from '../utils/utils';
// // const usersController = require('../controller/usersController');

// const getSUsr = express.Router();

// getSUsr.get(
//   '/user',
//   isAuth,
//   expressAsyncHandler(async (req: Request, res: Response) => {
//     const theUsers = await users;
//     res.status(200).send(theUsers);
//   })
// );
// getSUsr.get(
//   '/:id',
//   isAuth,
//   expressAsyncHandler(async (req: Request, res: Response) => {
//     if (!req.params?.id) {
//       res.status(400).json({ message: 'ایدی کاربر ضرروی است' });
//     }
//     const user = await users.find((u) => u._id === req.params.id);
//     if (!user) {
//       res.status(204).json({ message: `User ID ${req.params.id} not found` });
//     }
//     res.json(user);
//   })
// );
// getSUsr.get(
//   '/public',
//   expressAsyncHandler(async (req: Request, res: Response) => {
//     const posts = await publicContent;
//     res.status(200).send(posts);
//   })
// );

// export default getSUsr;
