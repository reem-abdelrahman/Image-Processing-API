"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
/*
if (!imageName) {
    return res.status(400).send('Please type the image name');
  }
  if (!widthN) {
    return res.status(400).send('Please type the width');
  }

  if (!heightN) {
    return res.status(400).send('Please type the height');
  } */ 
