import { IClienteRoutes } from "@/adapters/Driven/infrastructure/routes/IClienteRoutes";
import { IClienteController } from "@/adapters/controllers/Iclientecontroller";
import JsonSchemaMiddleware from "../middlewares/jsonSchemaValidation/base/jsonSchemaMiddleware";
import { ClientePostSchema } from "../middlewares/jsonSchemaValidation/schemas/ClienteSchema";

class ClienteRoutes implements IClienteRoutes {
    private express: any;
    private clienteController: IClienteController;
    private postPayloadValidator = new JsonSchemaMiddleware(ClientePostSchema);
    private BASE_URL: string;
    constructor(
        express: any,
        clienteController: IClienteController,
        BASE_URL: string
    ) {
        this.express = express;
        this.clienteController = clienteController;
        this.BASE_URL = BASE_URL;
    }

    buildRoutes() {
        console.log("BASE_URL", this.BASE_URL);
        console.log("Building cliente routes");
        this.express
            .get(
                "/cliente/:cpf/",
                this.clienteController.getClienteByCpf.bind(
                    this.clienteController
                )
            )
            .get(
                "/cliente/id/:id/",
                this.clienteController.getClienteById.bind(
                    this.clienteController
                )
            )
            .post(
                "/cliente",
                this.postPayloadValidator.validateSchema.bind(
                    this.postPayloadValidator
                ),
                this.clienteController.createCliente.bind(
                    this.clienteController
                )
            );
    }
}

export default ClienteRoutes;
