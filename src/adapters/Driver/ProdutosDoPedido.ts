import { IProdutosDoPedidoRepository } from "@/core/domain/repositories/IProdutosDoPedidoRepository";

class ProdutosDoPedido implements IProdutosDoPedidoRepository{
  create(idProduto: number, idPedido: number): Promise<void> {
    return Promise.resolve();
  }

  delete(idProduto: number, idPedido: number): Promise<void> {
    return Promise.resolve();
  }
}

export default ProdutosDoPedido;