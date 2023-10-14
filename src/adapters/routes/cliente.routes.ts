import express from "express";
import ClienteController from "../controllers/cliente.controller";
import ClienteInMemoryRepository from "@/adapters/Driver/ClienteInMemoryRepository";

const clienteRepository = new ClienteInMemoryRepository();
const Controller = new ClienteController(clienteRepository);

export default express()
    .get("/:cpf/", Controller.getCliente)

    .post("/", Controller.createCliente);
