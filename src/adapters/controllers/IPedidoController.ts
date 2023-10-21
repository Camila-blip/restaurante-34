import { Request, Response } from "express";

export interface IPedidoController{
    createPedido(req: Request, res: Response): any;
    getPedidoById(req: Request, res: Response): any;
    getPedidos(req: Request, res: Response): any;
    addProdutoAoPedido(req: Request, res: Response): any;
    removeProdutoAoPedido(req: Request, res: Response): any;
    updatePedidoPreparacao(req: Request, res: Response): any;
    updatePedidoAguardandoPagamento(req: Request, res: Response): any;
    updatePedidoFinalizado(req: Request, res: Response): any;
}