import { Pedido } from "@prisma/client";
import { IPedidoController } from "./IPedidoController";

class PedidoController implements IPedidoController{

  createPedido(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  getPedidoById(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  getPedidos(req: Request, res: Response) {
    return Promise.resolve([] as Pedido[]);
  }

  addProdutoAoPedido(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  removeProdutoAoPedido(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  updatePedidoPreparacao(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  updatePedidoAguardandoPagamento(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }

  updatePedidoFinalizado(req: Request, res: Response) {
    return Promise.resolve({} as Pedido);
  }
}

export default PedidoController;