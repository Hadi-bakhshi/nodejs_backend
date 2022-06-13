"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.users = [
    {
        id: 12,
        name: "hadibakhshi",
        username: "hadi",
        password: bcryptjs_1.default.hashSync("1234", 8),
        role: "admin",
        roleId: 1,
    },
    {
        id: 13,
        name: "johnZ",
        username: "john",
        password: bcryptjs_1.default.hashSync("1234", 8),
        role: "client",
        roleId: 2,
    },
];
//# sourceMappingURL=data.js.map