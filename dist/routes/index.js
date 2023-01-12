"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getImages_1 = __importDefault(require("./api/getImages"));
var routes = express_1.default.Router();
routes.use('/api/getImages', getImages_1.default);
routes.get('/', function (request, response) {
    response.send('<h1>Welcome</h1><h2>Please enter the image name and dimentions in the following manner</h2><p>Examples:<ul><li><a href="/api/getImages?filename=fjord">/api/getImages?filename=fjord</a></li><li><a href="/api/getImages?filename=fjord&width=100&height=100">/api/getImages?filename=fjord&width=100&height=100</a></li></ul></p>');
});
exports.default = routes;
