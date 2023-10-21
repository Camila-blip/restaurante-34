import { Application } from "express";
import ClienteRepository from "@/adapters/Driver/ClienteRepository";
import { CreateClienteUseCase } from "@/core/application/useCases/cliente/ClienteUseCase";
import ClienteController from "@/adapters/controllers/cliente.controller";
import ClienteRoutes from "./cliente.routes";
import { prisma } from "../database";

import ProdutoRepository from "@/adapters/Driver/ProdutoRepository";
import { CreateProdutoUseCase } from "@/core/application/useCases/produto/ProdutoUseCase";
import ProdutoController from "@/adapters/controllers/produto.controller";
import ProdutoRoutes from "./produto.routes";

const BASE_URL = "/api";

export default function routes(app: Application) {
    const clienteRepository = new ClienteRepository(prisma);
    const createClienteUseCase = new CreateClienteUseCase(clienteRepository);
    const clienteController = new ClienteController(createClienteUseCase);
    const clienteRoutes = new ClienteRoutes(app, clienteController, BASE_URL);

    clienteRoutes.buildRoutes();

    const produtoRepository = new ProdutoRepository(prisma);
    const createProdutoUseCase = new CreateProdutoUseCase(produtoRepository);
    const produtoController = new ProdutoController(createProdutoUseCase);
    const produtoRoutes = new ProdutoRoutes(app, produtoController, BASE_URL);

    produtoRoutes.buildRoutes();
}
