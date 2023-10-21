import { Pedido } from "@prisma/client";

export interface IPedidoUseCase{
  executeCreation(clienteData: Pedido): Promise<Pedido>;
  executeDelete(id: number): Promise<Pedido>;
  executeGetById(id: number): Promise<Pedido>;
}