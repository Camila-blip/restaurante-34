import { IPedidoRepository } from "@/core/ports/IPedidoRepository";
import { IPedidoUseCase } from "./IPedidoUseCase";
import { IProdutosDoPedidoRepository } from "@/core/ports/IProdutosDoPedidoRepository";
import Pedido from "@/core/domain/Entities/Pedido";

class PedidoUseCase implements IPedidoUseCase {

  private produtosDoPedidoRepository: IProdutosDoPedidoRepository;
  private pedidoRepository: IPedidoRepository;

  constructor (produtosDoPedidoRepository: IProdutosDoPedidoRepository, pedidoRepository: IPedidoRepository){
    this.produtosDoPedidoRepository = produtosDoPedidoRepository;
    this.pedidoRepository = pedidoRepository;
  }

  executeCreation(clienteData: Pedido) {
    throw new Error("Method executeCreation not implemented.");
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