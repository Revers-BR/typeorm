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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoController = void 0;
const photo_1 = require("../models/photo");
const typeorm_1 = require("typeorm");
class PhotoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = typeorm_1.getManager().getRepository(photo_1.Photo);
            const photo = repository.create(req.body);
            yield repository.save(photo);
            res.json({
                photo
            });
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = typeorm_1.getManager().getRepository(photo_1.Photo);
            const photo = yield repository.find();
            res.json({
                photo
            });
        });
    }
}
exports.PhotoController = PhotoController;
//# sourceMappingURL=photo.controller.js.map