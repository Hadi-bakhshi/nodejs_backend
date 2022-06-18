"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const loginValidation = (data) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string(),
        password: joi_1.default.string(),
    });
    return schema.validate(data);
};
exports.loginValidation = loginValidation;
//# sourceMappingURL=validation.js.map