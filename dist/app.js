"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const posts_1 = __importDefault(require("./routes/posts"));
const sql = require('mssql');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api/user', user_1.default);
app.use('/api/posts', posts_1.default);
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
function getDBUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pool = yield sql.connect(config);
            let result = yield pool.request().query('SELECT * FROM Hadi.dbo.[User]');
            console.log("successful", result);
            sql.close();
        }
        catch (error) {
            console.log("error khord", error);
            sql.close();
        }
    });
}
app.get('/', (req, res) => {
    res.send({ data: getDBUsers() });
});
app.listen(port, () => {
    return console.log(`Express is listening at ${port}`);
});
//# sourceMappingURL=app.js.map