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
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
var retreiveImage = express_1.default.Router();
var imagePath = 'src/images';
var resizedImagePath = 'src/images/resized';
retreiveImage.use('/', express_1.default.static('src/images'));
retreiveImage.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    function getOriginalImage() {
        var originalImage = "".concat(imagePath, "/").concat(imageName, ".jpg");
        return originalImage;
    }
    var imageName, heightString, heightN, widthString, widthN, originalImage;
    return __generator(this, function (_a) {
        imageName = req.query.image;
        heightString = (req.query.height);
        heightN = parseInt(heightString);
        widthString = req.query.width;
        widthN = parseInt(widthString);
        originalImage = "".concat(imagePath, "/").concat(imageName, ".jpg");
        ;
        /// the problem is in this function
        /* function getProcessedImage() {
            getOriginalImage();
            return `${resizedImagePath}/${imageName}W${widthN}H${heightN}.jpg`
         } */
        if (!imageName) {
            return [2 /*return*/, res.status(400).send("Please type the image name")];
        }
        if (!widthN) {
            return [2 /*return*/, res.status(400).send("Please type the width")];
        }
        if (!heightN) {
            return [2 /*return*/, res.status(400).send("Please type the height")];
        }
        // Resize the Image
        (function resizeImage() {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, (0, sharp_1.default)(originalImage)
                                    .resize(Number(heightN), Number(widthN))
                                    .toFile(resizedImagePath)
                                /*  .then((data) => {
                                  /*  fsPromises.writeFile('wooow.png','w');
                                    res.send(data); */
                                //  const   saveImageOnDisk = (base64Image, imageName) => 
                                //const   buf = new Buffer(base64Image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                                //     })
                                // (data) => {
                                // return (res.end(data));
                                //    }
                            ];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        });
        next();
        return [2 /*return*/];
    });
}); });
exports.default = retreiveImage;
