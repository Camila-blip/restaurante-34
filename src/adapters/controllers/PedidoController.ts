import { Pedido } from "@prisma/client";
import { IPedidoController } from "./IPedidoController";
import { IProdutosDoPedidoRepository } from "@/core/domain/repositories/IProdutosDoPedidoRepository";
import { IPedidoRepository } from "@/core/domain/repositories/IPedidoRepository";

class PedidoController implements IPedidoController{
  private produtosDoPedidoRepository: IProdutosDoPedidoRepository;
  private pedidoRepository: IPedidoRepository;

  constructor (produtosDoPedidoRepository: IProdutosDoPedidoRepository, pedidoRepository: IPedidoRepository){
    this.produtosDoPedidoRepository = produtosDoPedidoRepository;
    this.pedidoRepository = pedidoRepository;
  }

  async createPedido(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  async getPedidoById(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  async getPedidos(req: Request, res: Response) {
    return Promise.resolve([] as Pedido[]);
  }

  async addProdutoAoPedido(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  async removeProdutoAoPedido(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  async updatePedidoPreparacao(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  async updatePedidoAguardandoPagamento(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  async updatePedidoFinalizado(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }
}

export default PedidoController;