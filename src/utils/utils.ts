import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
interface IUser {
  id: number;
  name: string;
  username: string;
  role: string;
  roleId: number;
}

export const generateToken = (user: IUser) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role,
      roleId: user.roleId,
    },
    process.env.TOKEN_SECRET as string,
    {
      expiresIn: "2h",
    }
  );
};

export const isAuth = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization || req.headers.Authorization;
  if (!authorization)
    return res.status(401).send({ message: "خطای عدم دسترسی" });


  try {
    const verified = jwt.verify(authorization, process.env.TOKEN_SECRET as string);
    console.log(req.user);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).send({ message: "دسترسی نامعتبر" });
  }
};
