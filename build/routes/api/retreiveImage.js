'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.absoluteImagePath = exports.absoluteResizedImagePath = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var imageProcess_1 = __importDefault(require("../../utilities/imageProcess"));
var retreiveImage = (0, express_1.default)();
var absoluteResizedImagePath = path_1.default.resolve('./') + '/images/resized';
exports.absoluteResizedImagePath = absoluteResizedImagePath;
var absoluteImagePath = path_1.default.resolve('./') + '/images';
exports.absoluteImagePath = absoluteImagePath;
retreiveImage.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imageName, heightString, heightN, widthString, widthN, resizedImage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                imageName = req.query.image;
                heightString = req.query.height;
                heightN = parseInt(heightString);
                widthString = req.query.width;
                widthN = parseInt(widthString);
                // resizing the image by using a module 
                return [4 /*yield*/, (0, imageProcess_1.default)(imageName, widthN, heightN)];
            case 1:
                // resizing the image by using a module 
                _a.sent();
                resizedImage = "".concat(absoluteResizedImagePath, "/").concat(imageName, "W").concat(widthN, "H").concat(heightN, ".jpg");
                // view the image in the browser
                try {
                    res.sendFile(resizedImage);
                }
                catch (error) {
                    console.log(error + 'sendFile code');
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(400);
                res.send(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = retreiveImage;
