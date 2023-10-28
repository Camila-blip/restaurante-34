import { IPedidoRepository } from "@/core/ports/IPedidoRepository";
import { IPedidoUseCase } from "./IPedidoUseCase";
import { IProdutosDoPedidoRepository } from "@/core/ports/IProdutosDoPedidoRepository";
import { Pedido } from "@prisma/client";



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

  async executeUpdatePedidoFinalizado(idPedido: number) {
    try {
      const response = await this.pedidoRepository.updatePedido(idPedido, "Finalizado");

      return response;
    } catch (error){

      throw error;
    }
  }

  async executeUpdatePedidoPreparacao(idPedido: number) {
    try {
      const response = await this.pedidoRepository.updatePedido(idPedido, "Em preparação");

      return response;
    } catch (error){

      throw error;
    }
  }

  async executeGetPedidoById(idPedido: number) {
    try{
      const response = await this.pedidoRepository.getPedidoById(idPedido);

      return response;
    }
    catch(error){
      throw error;
    }
  }

  async executeGetPedidos() {
    try{
      const response = await this.pedidoRepository.getPedidos();

      return response;
    }
    catch(error){
      throw error;
    }
  }

  async executeGePedidoByStatus(status: string) {
    try{
      const response = await this.pedidoRepository.getPedidosByStatus(status);

      return response;
    }
    catch(error){
      throw error;
    }
  }

  async executeUpdatePedidoPronto(idPedido: number) {
    try {
      const response = await this.pedidoRepository.updatePedido(idPedido, "Pronto");

      return response;
    } catch (error){

      throw error;
    }
  }

  executeAddProdutoAoPedido(idPedido: number, idProdutos: number[]) {
    throw new Error("Method executeAddProdutoAoPedido not implemented.");
  }

  executeRemoveProdutoAoPedido(idPedido: number, idProdutos: number[]) {
    throw new Error("Method executeRemoveProdutoAoPedido not implemented.");
  }
}

export default PedidoUseCase;
