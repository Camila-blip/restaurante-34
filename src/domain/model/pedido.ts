class Pedido {
    constructor(
        public id: number,
        public statusPedido: StatusPedido,
        public produtos: Produto,
        public statusPagamento: StatusPagamento,
        public cliente: Cliente
    ) {}
}