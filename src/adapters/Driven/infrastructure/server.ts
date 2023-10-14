import express from "express";
import "dotenv/config";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import ClienteRoutes from "@/adapters/Driven/infrastructure/routes/cliente.routes";
import ClienteController from "@/adapters/controllers/cliente.controller";
import ClienteRepository from "@/adapters/Driver/ClienteRepository";
import { CreateClienteUseCase } from "@/core/application/useCases/cliente/ClienteUseCase";
import {prisma} from "@/adapters/Driven/infrastructure/database";


try{
  const app = express();

  const clienteRepository = new ClienteRepository(prisma);
  const createClienteUseCase = new CreateClienteUseCase(clienteRepository);
  const clienteController = new ClienteController(createClienteUseCase);
  const clienteRoutes = new ClienteRoutes(app, clienteController);

  app.use(bodyParser.json({ limit: "50mb" })); 
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(express.json());
  app.use(cors());

  
  clienteRoutes.buildRoutes();

  
  const server = http.createServer(app);
  
  server.listen(process.env.PORT || 3001, () => {
    console.log(`RUNNING ON PORT ${process.env.PORT || 3001}`);
  });
  
}
catch(err){
console.log(err);
}
