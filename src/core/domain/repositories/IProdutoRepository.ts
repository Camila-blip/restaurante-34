import { Produto } from "../Entities/produto";

export interface IProdutoRepository {
    create(produto: Produto): Promise<Produto>;
}
