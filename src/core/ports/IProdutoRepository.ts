import { Produto } from "../domain/Entities/Produto";

export interface IProdutoRepository {
    create(produto: Produto): Promise<Produto>;
}
