import { IPedidoRepository } from "@/core/domain/repositories/IPedidoRepository";
import { IPedidoUseCase } from "./IPedidoUseCase";
import { IProdutosDoPedidoRepository } from "@/core/domain/repositories/IProdutosDoPedidoRepository";

class PedidoUseCase implements IPedidoUseCase {

  private produtosDoPedidoRepository: IProdutosDoPedidoRepository;
  private pedidoRepository: IPedidoRepository;

  constructor (produtosDoPedidoRepository: IProdutosDoPedidoRepository, pedidoRepository: IPedidoRepository){
    this.produtosDoPedidoRepository = produtosDoPedidoRepository;
    this.pedidoRepository = pedidoRepository;
  }

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