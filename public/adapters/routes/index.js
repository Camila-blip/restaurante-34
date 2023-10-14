"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_routes_1 = __importDefault(require("./cliente.routes"));
var BASE_URL = "/api";
function routes(app) {
    app.use("".concat(BASE_URL, "/cliente"), cliente_routes_1.default);
}
exports.default = routes;
