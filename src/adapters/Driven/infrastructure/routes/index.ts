import { Application } from "express";
import clienteRoutes from "./cliente.routes";

const BASE_URL = "/api";

export default function routes(app: Application) {
    app.use(`${BASE_URL}/cliente`, clienteRoutes);
}
