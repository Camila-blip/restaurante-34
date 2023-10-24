import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

class Pedido {
    constructor(
        public id: number,
        public statusPedido: StatusPedido,
        public produtos: Produto,
        public statusPagamento: StatusPagamento,
        public cliente: Cliente
    ) {}
}

export default Pedido;