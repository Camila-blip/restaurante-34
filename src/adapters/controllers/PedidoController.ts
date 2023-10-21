import { Pedido } from "@prisma/client";
import { IPedidoController } from "./IPedidoController";
import { IPedidoUseCase } from "@/core/application/useCases/pedido/IPedidoUseCase";
import { Request, Response } from "express";

class PedidoController implements IPedidoController{
  private pedidoUseCase: IPedidoUseCase;

  constructor (pedidoUseCase: IPedidoUseCase){
    this.pedidoUseCase = pedidoUseCase;
  }

  async createPedido(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }

  async getPedidoById(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }

  async getPedidos(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }

  async addProdutoAoPedido(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }

  async removeProdutoAoPedido(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }

  async updatePedidoPreparacao(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }

  async updatePedidoAguardandoPagamento(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }

  async updatePedidoFinalizado(req: Request, res: Response) {
    return res
    .status(200)
    .json({ message: "rota criada" });
  }
}

export default PedidoController;