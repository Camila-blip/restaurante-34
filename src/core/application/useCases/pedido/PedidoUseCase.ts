import { IPedidoUseCase } from "./IPedidoUseCase";

class PedidoUseCase implements IPedidoUseCase {

  executeCreation(clienteData: { id: number; clienteId: number; statusPagamentoId: number; statusPedidoId: number; produtoId: number; nomeCliente: string; createdAt: Date; updatedAt: Date; }): Promise<{ id: number; clienteId: number; statusPagamentoId: number; statusPedidoId: number; produtoId: number; nomeCliente: string; createdAt: Date; updatedAt: Date; }> {
    throw new Error("Method not implemented.");
  }

  executeDelete(id: number): Promise<{ id: number; clienteId: number; statusPagamentoId: number; statusPedidoId: number; produtoId: number; nomeCliente: string; createdAt: Date; updatedAt: Date; }> {
    throw new Error("Method not implemented.");
  }

  executeGetById(id: number): Promise<{ id: number; clienteId: number; statusPagamentoId: number; statusPedidoId: number; produtoId: number; nomeCliente: string; createdAt: Date; updatedAt: Date; }> {
    throw new Error("Method not implemented.");
  }

}

export default PedidoUseCase;