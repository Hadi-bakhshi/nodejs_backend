import express, { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { privateContent, publicContent } from "../data/data";
import { isAuth } from "../utils/utils";
const postRouter = express.Router();

postRouter.get(
  "/private",
  isAuth,
  expressAsyncHandler(async (req: Request, res: Response) => {
    const posts = await privateContent;
    res.status(200).send(posts);
  })
);
postRouter.get(
  "/public",
  expressAsyncHandler(async (req: Request, res: Response) => {
    const posts = await publicContent;
    res.status(200).send(posts);
  })
);

export default postRouter;
