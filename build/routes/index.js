"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var retreiveImage_1 = __importDefault(require("./api/retreiveImage"));
var newImage_1 = __importDefault(require("./api/newImage"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send("hello main api");
});
routes.use('/oldImage', retreiveImage_1.default);
routes.use('/newImage', newImage_1.default);
//routes.use('/images', express.static());
//async function getMetadata() {
//    const metadata = await sharp("sammy.png").metadata();
//    console.log(metadata);
//  }
exports.default = routes;
