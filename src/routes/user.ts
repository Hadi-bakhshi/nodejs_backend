import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import * as data from '../data/data';
import { generateToken } from '../utils/utils';
import { loginValidation } from '../validation/validation';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post(
  '/login',
  asyncHandler(async (req: Request | any, res: Response | any) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ message: 'اوضاع خیته' });
    const reqUser = req.body.username;
    const reqPass = req.body.password;
    const user = await prisma.user.findUnique({
      where: {
        username: reqUser,
      },
    });
    console.log(user);
    if (!user)
      return res.status(400).json({ message: 'کاربر مورد نظر وجود ندارد' });
    const validPass = (await user.password) === reqPass;
    if (!validPass)
      return res.status(400).json({ message: 'رمز عبور نادرست می باشد' });
    res.send({
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role,
      roleId: user.roleId,
      token: generateToken(user),
      status: 'عملیات با موفقیت انجام شد',
    });
  })
);

export default router;
