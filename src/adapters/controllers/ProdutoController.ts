import { Response, Request } from "express";
import { CreateProdutoUseCase } from "@/core/application/useCases/produto/ProdutoUseCase";
import { IProdutoController } from "./IProdutoController";

export default class ProdutoController implements IProdutoController {
    private createProdutoUseCase: CreateProdutoUseCase;

    constructor(CreateProdutoUseCase: any) {
        this.createProdutoUseCase = CreateProdutoUseCase;
    }

    async createProduto(req: Request, res: Response) {
        const requestBody = req.body;
        console.log("aqnocontroller");
        if (!requestBody) {
            return res
                .status(400)
                .json({ message: "Error criar produto, body vazio" });
        }

        try {
            const produto = await this.createProdutoUseCase.executeCreation(
                requestBody
            );

            return res
                .status(200)
                .json({ message: "Sucesso criar produto", produto });
        } catch (error: any) {
            return res.status(400).json({ message: error?.message });
        }
    }
}
