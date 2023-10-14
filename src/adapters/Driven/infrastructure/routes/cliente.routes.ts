import express from "express";
import ClienteController from "@/adapters/controllers/cliente.controller";
import { prisma } from "@/adapters/Driven/infrastructure/database";
import ClienteRepository from "@/adapters/Driver/ClienteRepository";

const clienteRepository = new ClienteRepository(prisma);
const clienteController = new ClienteController(clienteRepository);

export default express()
    .get("/cliente/:cpf/", clienteController.getCliente)

    .post("/cliente", clienteController.createCliente);
