"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var retreiveImage_1 = __importDefault(require("./api/retreiveImage"));
//import imageProcess from './api/imageProcess';
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('hello main api');
    res.status(200);
});
routes.use('/resizedImage', retreiveImage_1.default);
exports.default = routes;
