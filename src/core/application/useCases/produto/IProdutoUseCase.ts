import { Produto } from "@/core/domain/Entities/produto";

export interface IProdutoUseCase {
    executeCreation(produtoData: Produto): Promise<Produto>;
}
