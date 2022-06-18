"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role,
        roleId: user.roleId,
    }, process.env.TOKEN_SECRET, {
        expiresIn: "2h",
    });
};
exports.generateToken = generateToken;
const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization || req.headers.Authorization;
    if (!authorization)
        return res.status(401).send({ message: "خطای عدم دسترسی" });
    try {
        const verified = jsonwebtoken_1.default.verify(authorization, process.env.TOKEN_SECRET);
        console.log(req.user);
        req.user = verified;
        next();
    }
    catch (error) {
        res.status(401).send({ message: "دسترسی نامعتبر" });
    }
};
exports.isAuth = isAuth;
//# sourceMappingURL=utils.js.map