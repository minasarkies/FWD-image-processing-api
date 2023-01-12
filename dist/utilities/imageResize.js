"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newImagePath = exports.resizeImage = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var resizeImage = function (filename, height, width) {
    return (0, sharp_1.default)(path_1.default.resolve("./assets/".concat(filename, ".jpeg")))
        .resize({
        width: width,
        height: height,
        fit: sharp_1.default.fit.cover,
    })
        .toBuffer();
};
exports.resizeImage = resizeImage;
var newImagePath = function (filename, height, width) {
    return "./assets/full/".concat(filename).concat(height, "x").concat(width, ".jpeg");
};
exports.newImagePath = newImagePath;
