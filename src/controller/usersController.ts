import { Request, Response } from 'express';

import { users } from '../data/data';

const getUser = async (req: Request, res: Response) => {
  if (!req.params?.id)
    return res.status(400).json({ message: 'ایدی کاربر ضروری است' });
  const user = await users.find((u) => u._id === req.params.id);
  if (!user) {
    return res
      .status(204)
      .json({ message: `User ID ${req.params.id} not found` });
  }
  res.json(user);
};

module.exports = { getUser };
