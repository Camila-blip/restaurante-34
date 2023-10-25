import Pedido from "@/core/domain/Entities/pedido";
export interface IPedidoRepository {
    create(pedido: Pedido): Promise<Pedido>;
    getPedidoById(id: number): Promise<Pedido>;
    getPedidos(status: string): Promise<Pedido[]>;
    updatePedido(id: number, status: string): Promise<Pedido>;
}