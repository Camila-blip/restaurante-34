"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cliente_controller_1 = __importDefault(require("../controllers/cliente.controller"));
var Controller = new cliente_controller_1.default();
exports.default = (0, express_1.default)()
    .get("/:cpf/", Controller.getCliente)
    .post("/", Controller.createCliente);
