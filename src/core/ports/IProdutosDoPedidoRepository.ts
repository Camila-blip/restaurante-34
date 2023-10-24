export interface IProdutosDoPedidoRepository {
  create(idProduto: number, idPedido: number): Promise<void>;
  delete(idProduto: number, idPedido: number): Promise<void>;
}