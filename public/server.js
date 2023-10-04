"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var http_1 = __importDefault(require("http"));
require("./database");
var routes_1 = __importDefault(require("./routes"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var server = http_1.default.createServer(app);
(0, routes_1.default)(app);
server.listen(process.env.PORT || 3001, function () {
    console.log("RUNNING ON PORT ".concat(process.env.PORT || 3001));
});
