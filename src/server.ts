import express from "express";
import "dotenv/config";
import http from "http";
import "./database";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

routes(app);

server.listen(process.env.PORT || 3001, () => {
    console.log(`RUNNING ON PORT ${process.env.PORT || 3001}`);
});
