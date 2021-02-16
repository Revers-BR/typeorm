"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const app_1 = require("./app");
const typeorm_1 = require("typeorm");
const database_1 = require("./config/database");
let PORT = process.env.PORT || 3000;
typeorm_1.createConnection(database_1.dataBaseConfig).then(() => {
    app_1.default.listen(PORT, () => {
        console.info(`escutando na porta: ${PORT}`);
    });
}).catch(e => {
    console.error(`Error: ${e}`);
});
//# sourceMappingURL=server.js.map