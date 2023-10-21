import { Pedido } from "@prisma/client";

export interface IPedidoController{
    createPedido(req: Request, res: Response): Promise<Pedido>;
    getPedidoById(req: Request, res: Response): Promise<Pedido>;
    getPedidos(req: Request, res: Response): Promise<Pedido[]>;
    addProdutoAoPedido(req: Request, res: Response): Promise<Pedido>;
    removeProdutoAoPedido(req: Request, res: Response): Promise<Pedido>;
    updatePedidoPreparacao(req: Request, res: Response): Promise<Pedido>;
    updatePedidoAguardandoPagamento(req: Request, res: Response): Promise<Pedido>;
    updatePedidoFinalizado(req: Request, res: Response): Promise<Pedido>;
}