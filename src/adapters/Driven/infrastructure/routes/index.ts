import { Application } from "express";
import clienteRoutes from "./cliente.routes";
import ClienteRepository from "@/adapters/Driver/ClienteRepository";
import { CreateClienteUseCase } from "@/core/application/useCases/cliente/ClienteUseCase";
import ClienteController from "@/adapters/controllers/cliente.controller";
import ClienteRoutes from "./cliente.routes";
import { prisma } from "../database";

const BASE_URL = "/api";

export default function routes(app: Application) {
    const clienteRepository = new ClienteRepository(prisma);
    const createClienteUseCase = new CreateClienteUseCase(clienteRepository);
    const clienteController = new ClienteController(createClienteUseCase);
    const clienteRoutes = new ClienteRoutes(app, clienteController);

    clienteRoutes.buildRoutes();
}
