import { Response, Request } from "express";
import { CreateProdutoUseCase } from "@/core/application/useCases/produto/ProdutoUseCase";
import { IProdutoController } from "@/adapters/controllers/IProdutoController";

export default class ProdutoController implements IProdutoController {
    private createProdutoUseCase: CreateProdutoUseCase;

    constructor(CreateProdutoUseCase: any) {
        this.createProdutoUseCase = CreateProdutoUseCase;
    }

    async createProduto(req: Request, res: Response) {
        const requestBody = req.body;
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
    async putProduto(req: Request, res: Response) {
        try {
            const requestBody = req.body;

            // const produto = await this.createProdutoUseCase.executeCreation(
            //     requestBody
            // );
            return res
                .status(200)
                .json({ message: "Sucesso ao atualizar o produto" });
        } catch (error) {
            return res.status(400).json({ message: "error?.message " });
        }
    }

    async deleteProduto(req: Request, res: Response) {
        return res
            .status(200)
            .json({ message: "Sucesso ao deletar o produto" });
    }
}
