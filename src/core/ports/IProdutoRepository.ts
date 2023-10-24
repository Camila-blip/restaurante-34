import { Produto } from "../domain/Entities/produto";

export interface IProdutoRepository {
    create(produto: Produto): Promise<Produto>;
}
