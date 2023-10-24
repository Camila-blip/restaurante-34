import { IProdutoRoutes } from "@/adapters/Driven/infrastructure/routes/IProdutoRoutes";
import { IProdutoController } from "@/adapters/controllers/Iprodutocontroller";

class ProdutoRoutes implements IProdutoRoutes {
    private express: any;
    private produtoController: IProdutoController;
    private BASE_URL: string;

    constructor(
        express: any,
        produtoController: IProdutoController,
        BASE_URL: string
    ) {
        this.express = express;
        this.produtoController = produtoController;
        this.BASE_URL = BASE_URL;
    }

    buildRoutes() {
        console.log("Building produto routes");

        this.express.get(
            `${this.BASE_URL}/produto`,

            this.produtoController.createProduto.bind(this.produtoController)
        );
        this.express.post(
            `${this.BASE_URL}/produto`,

            this.produtoController.createProduto.bind(this.produtoController)
        );

        this.express.put(
            `${this.BASE_URL}/produto/:id`,

            this.produtoController.createProduto.bind(this.produtoController)
        );
        this.express.delete(
            `${this.BASE_URL}/produto/:id`,

            this.produtoController.createProduto.bind(this.produtoController)
        );
    }
}

export default ProdutoRoutes;
