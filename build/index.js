"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var sharp = require('sharp');
var app = (0, express_1.default)();
var port = process.env.PORT || 9000;
//const middle = [imageHandler];
app.use('/api', index_1.default);
//console.log(imageDir);
//app.get('/images/:id/:length/:width', (req, res) => {
//  let image = fsPromises.readFile(/images/req.params.id);
// res.send('your image is' + req.image)
// });
//app.get('/images/:id/:length/:width', (req, res) => {
//   req.params.id
//res.send(
//       sharp('input.jpg')
// .rotate()
// .resize(200)
// .jpeg({ mozjpeg: true })
// .toBuffer()
// .then( data => { ... })
// .catch( err => { ... });
//  );
//  });
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
