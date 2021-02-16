"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseConfig = void 0;
const photo_1 = require("../models/photo");
console.log("env", process.env.DATABASE_URL);
exports.dataBaseConfig = {
    url: process.env.DATABASE_URL,
    type: "postgres",
    synchronize: true,
    entities: [
        photo_1.Photo
    ]
};
//# sourceMappingURL=database.js.map