import { Produto } from "@/core/domain/Entities/produto";
import { IProdutoRepository } from "@/core/domain/repositories/IProdutoRepository";
import { IProdutoUseCase } from "./IProdutoUseCase";

export class CreateProdutoUseCase implements IProdutoUseCase {
    private produtoRepository: IProdutoRepository;

    constructor(produtoRepository: IProdutoRepository) {
        this.produtoRepository = produtoRepository;
    }

    async executeCreation(produtoData: Produto): Promise<Produto> {
        try {
            console.log("caso de uso");
            // Aqui você pode adicionar lógica de validação ou manipulação de dados, se necessário.

            // Chame o método create do repositório para criar um novo cliente
            const novoCliente = await this.produtoRepository.create(
                produtoData
            );

            return novoCliente;
        } catch (error) {
            // Lide com erros ou exceções, se necessário.
            throw error;
        }
    }
}
