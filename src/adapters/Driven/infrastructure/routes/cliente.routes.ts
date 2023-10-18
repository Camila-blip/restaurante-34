import { IClienteRoutes } from "@/adapters/Driven/infrastructure/routes/IClienteRoutes";
import { IClienteController } from "@/adapters/controllers/Iclientecontroller";

class ClienteRoutes implements IClienteRoutes{

    private express: any;
    private clienteController: IClienteController;

    constructor(express: any, clienteController: IClienteController) {
        this.express = express;
        this.clienteController = clienteController;
    }


    buildRoutes() {
        console.log("Building cliente routes");
        this.express
        .get("/cliente/:cpf/", this.clienteController.getClienteByCpf.bind(this.clienteController))
        .post("/cliente", this.clienteController.createCliente.bind(this.clienteController));
    }

}

export default ClienteRoutes;