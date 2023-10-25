import { Produto } from "@/core/domain/Entities/Produto";

export interface IProdutoUseCase {
    executeCreation(produtoData: Produto): Promise<Produto>;
}
