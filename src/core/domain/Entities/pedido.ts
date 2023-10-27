import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

class Pedido {
    constructor(
        public id: number,
        public statusPedidoId: number,
        public clienteId: number,
        public createdAt: Date,
        public updateAt: Date,
    ) {}
}

export default Pedido;