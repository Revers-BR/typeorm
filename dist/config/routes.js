"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const photo_controller_1 = require("../controllers/photo.controller");
class Routes {
    constructor() {
        this.photoController = new photo_controller_1.PhotoController();
    }
    routes(app) {
        try {
            app.route("/").
                get(this.photoController.index).
                post(this.photoController.create);
        }
        catch (e) {
            /* handle error */
            console.log(e);
        }
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map