import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/user";
import postRouter from "./routes/posts";
dotenv.config();

const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", router);
app.use('/api/posts', postRouter)

// app.get("/api/current/user", (req: Request, res: Response) => {
//   res.send("Hi Reza");
// });


app.listen(port, () => {
  return console.log(`Express is listening at ${port}`);
});
