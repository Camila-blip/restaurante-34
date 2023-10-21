import { Produto } from "../Entities/produto";

export interface IProdutoRepository {
    create(produto: Produto): Promise<Produto>;
    put(produto: Produto): Promise<Produto>;
    delete(id: number): Promise<Produto>;
}
