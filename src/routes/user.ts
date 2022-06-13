import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import * as data from "../data/data";
import { generateToken } from "../utils/utils";
import { loginValidation } from "../validation/validation";
import bcrypt from "bcryptjs";

const router = express.Router();



router.post(
  "/login",
  asyncHandler(async (req: Request | any, res: Response | any) => {
    const { error } = loginValidation(req.body);
    if (error)
    return res.status(400).json({ message: "اوضاع خیته" });
    const reqUser = req.body.username
    const user = data.users.find(u => u.username === reqUser)
    console.log(user);
    if (!user)
      return res.status(400).json({ message: "کاربر مورد نظر وجود ندارد" });
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res.status(400).json({ message: "رمز عبور نادرست می باشد" });
    res.send({
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role,
      roleId: user.roleId,
      token: generateToken(user),
      status: "عملیات با موفقیت انجام شد"
    });
  })
);

export default router;
