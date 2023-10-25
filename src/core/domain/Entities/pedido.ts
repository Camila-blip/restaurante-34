import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

class Pedido {
    constructor(
        public id: number,
        public statusPedidoId: number,
        public clienteId: number,
    ) {}
}

export default Pedido;