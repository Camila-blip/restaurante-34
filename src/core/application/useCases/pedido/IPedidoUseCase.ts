import { Pedido } from "@prisma/client";


export interface IPedidoUseCase{
  executeCreation(pedidoData: Pedido): any;
  executeDelete(idPedido: number): any;
  executeGetPedidoById(idPedido: number): any;
  executeGetPedidos(): any;
  executeAddProdutoAoPedido(idPedido: number, idProdutos: number[]): any;
  executeRemoveProdutoAoPedido(idPedido: number, idProdutos: number[]): any;
  executeUpdatePedidoPreparacao(idPedido: number): any;
  executeUpdatePedidoPronto(idPedido: number): any;
  executeUpdatePedidoFinalizado(idPedido: number): any;
  executeGePedidoByStatus(status: string): any;
}