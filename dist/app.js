"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const posts_1 = __importDefault(require("./routes/posts"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api/user", user_1.default);
app.use('/api/posts', posts_1.default);
// app.get("/api/current/user", (req: Request, res: Response) => {
//   res.send("Hi Reza");
// });
app.listen(port, () => {
    return console.log(`Express is listening at ${port}`);
});
//# sourceMappingURL=app.js.map