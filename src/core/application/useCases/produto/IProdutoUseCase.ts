import { Produto } from "@/core/domain/Entities/Produto";

export interface IProdutoUseCase {
    executeCreation(produtoData: Produto): Promise<Produto>;
    executeDelete(id: number): Promise<Produto>;
    executeUpdate(produtoData: Produto): Promise<Produto>;
    executeGetProdutoCategoria(categoriaProdutoId: number): Promise<Produto[]>;
}
