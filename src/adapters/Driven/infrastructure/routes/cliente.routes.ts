import { IClienteRoutes } from "@/adapters/Driven/infrastructure/routes/IClienteRoutes";
import ClienteController from "@/adapters/controllers/cliente.controller";
import { prisma } from "@/adapters/Driven/infrastructure/database";
import ClienteRepository from "@/adapters/Driver/ClienteRepository";

const clienteRepository = new ClienteRepository(prisma);
const clienteController = new ClienteController(clienteRepository);

class clienteRoutes implements IClienteRoutes{
    private express: any;

    constructor(express: any) {
        this.express = express;
    }


    buildRoutes() {
        console.log("Building cliente routes");
        this.express
        .get("/cliente/:cpf/", clienteController.getCliente)
        .post("/cliente", clienteController.createCliente);
    }

}

export default clienteRoutes;