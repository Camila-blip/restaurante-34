import express from "express";
import ClienteController from "../controllers/cliente.controller";

const Controller = new ClienteController();

export default express()
    .get("/:cpf/", Controller.getCliente)

    .post("/", Controller.createCliente);
