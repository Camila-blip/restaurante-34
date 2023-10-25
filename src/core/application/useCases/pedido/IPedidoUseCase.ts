import Pedido from "@/core/domain/Entities/Pedido";

export interface IPedidoUseCase{
  executeCreation(pedidoData: Pedido): any;
  executeDelete(idPedido: number): any;
  executeGetPedidoById(idPedido: number): any;
  executeGetPedidos(status: string): any;
  executeAddProdutoAoPedido(idPedido: number, idProdutos: number[]): any;
  executeRemoveProdutoAoPedido(idPedido: number, idProdutos: number[]): any;
  executeUpdatePedidoPreparacao(idPedido: number): any;
  executeUpdatePedidoAguardandoPagamento(idPedido: number): any;
  executeUpdatePedidoPronto(idPedido: number): any;
  executeUpdatePedidoFinalizado(idPedido: number): any;
}