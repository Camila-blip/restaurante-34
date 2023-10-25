import { IPedidoRepository } from "@/core/ports/IPedidoRepository";
import { IPedidoUseCase } from "./IPedidoUseCase";
import { IProdutosDoPedidoRepository } from "@/core/ports/IProdutosDoPedidoRepository";
import Pedido from "@/core/domain/Entities/pedido";


class PedidoUseCase implements IPedidoUseCase {

  private produtosDoPedidoRepository: IProdutosDoPedidoRepository;
  private pedidoRepository: IPedidoRepository;

  constructor (produtosDoPedidoRepository: IProdutosDoPedidoRepository, pedidoRepository: IPedidoRepository){
    this.produtosDoPedidoRepository = produtosDoPedidoRepository;
    this.pedidoRepository = pedidoRepository;
  }

  async executeCreation(clienteData: Pedido) {
    clienteData.statusPedidoId = 1;
    try{
      const response = await this.pedidoRepository.create(clienteData);

      return response;
    }
    catch(error){
      throw error;
    }
    
  }

  executeDelete(id: number) {
    throw new Error("Method executeDelete not implemented.");
  }

  executeUpdatePedidoAguardandoPagamento(idPedido: number) {
    throw new Error("Method executeUpdatePedidoAguardandoPagamento not implemented.");
  }

  executeUpdatePedidoFinalizado(idPedido: number) {
    throw new Error("Method executeUpdatePedidoFinalizado not implemented.");
  }

  executeUpdatePedidoPreparacao(idPedido: number) {
    throw new Error("Method executeUpdatePedidoPreparacao not implemented.");
  }

  executeGetPedidoById(idPedido: number) {
    throw new Error("Method executeGetPedidoById not implemented.");
  }

  executeGetPedidos(status: string) {
    throw new Error("Method executeGetPedidos not implemented.");
  }

  executeUpdatePedidoPronto(idPedido: number) {
    throw new Error("Method executeUpdatePedidoPronto not implemented.");
  }

  executeAddProdutoAoPedido(idPedido: number, idProdutos: number[]) {
    throw new Error("Method executeAddProdutoAoPedido not implemented.");
  }

  executeRemoveProdutoAoPedido(idPedido: number, idProdutos: number[]) {
    throw new Error("Method executeRemoveProdutoAoPedido not implemented.");
  }
}

export default PedidoUseCase;