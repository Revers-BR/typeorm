"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./config/routes");
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.router = new routes_1.Routes();
        this.router.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map