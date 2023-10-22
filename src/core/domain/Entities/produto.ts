export interface Produto {
    id: number;
    descricao: string;
    preco: string;
    categoria: Categoria;
    cardapio: any;
    ProdutosDoPedido: any;
    categoriaProduto: any;
    pedido: any;
}
