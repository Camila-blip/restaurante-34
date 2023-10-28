import ProdutosDoPedido from "@/adapters/Driver/ProdutosDoPedido";
import { CategoriaProduto, ProdutosDoCardapio } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface Produto {
    id: number;
    descricao: string;
    preco: Decimal;
    categoriaProdutoId: number;
    produtosDoCardapio: ProdutosDoCardapio[];
    produtosDoPedido: ProdutosDoPedido[];
    categoriaProduto: CategoriaProduto;
    createdAt: Date;
    updatedAt: Date;
}
