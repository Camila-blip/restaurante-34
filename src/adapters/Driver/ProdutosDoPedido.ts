import { IProdutosDoPedidoRepository } from "@/core/ports/IProdutosDoPedidoRepository";
import { PrismaClient } from "@prisma/client";

class ProdutosDoPedido implements IProdutosDoPedidoRepository{

  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient){
    this.prismaClient = prismaClient;
  }

  create(idProduto: number, idPedido: number): Promise<void> {
    return Promise.resolve();
  }

  delete(idProduto: number, idPedido: number): Promise<void> {
    return Promise.resolve();
  }
}

export default ProdutosDoPedido;