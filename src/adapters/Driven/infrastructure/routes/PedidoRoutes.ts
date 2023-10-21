import { IpedidoRoutes } from "./IPedidoRoutes";
import { IPedidoController } from "@/adapters/controllers/IPedidoController";

class PedidoRoutes implements IpedidoRoutes {
    private express: any;
    private pedidoController: IPedidoController;
    private BASE_URL: string;

    constructor(
        express: any,
        produtoController: IPedidoController,
        BASE_URL: string
    ) {
        this.express = express;
        this.pedidoController = produtoController;
        this.BASE_URL = BASE_URL;
    }

    buildRoutes() {
        console.log("Building pedido routes");

        this.express.post(
            `${this.BASE_URL}/pedido`,
            this.pedidoController.createPedido.bind(this.pedidoController)
        )
        .get(
            `${this.BASE_URL}/pedidos`,
            this.pedidoController.getPedidos.bind(this.pedidoController)
        )
        .get(
            `${this.BASE_URL}/pedido/:id`,
            this.pedidoController.getPedidoById.bind(this.pedidoController)
        )
        .patch(
            `${this.BASE_URL}/pedido/:id/:status`,
            this.pedidoController.updatePedidoPreparacao.bind(this.pedidoController)
        );
    }
}

export default PedidoRoutes;
