import { IPedidoRepository } from "@/core/ports/IPedidoRepository";
import { Pedido, PrismaClient } from "@prisma/client";

class PedidoRepository implements IPedidoRepository{
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient){
      this.prismaClient = prismaClient;
    }

    async create(pedido: Pedido){
      try {
        const pedido_response =  await this.prismaClient.pedido.create({
          data: {
            statusPedidoId: pedido.statusPedidoId,
            clienteId: pedido.clienteId
          }
        });

        return pedido_response;
      } catch (error) {
        throw error;
      }
    }

    getPedidoById(id: number){
      return Promise.resolve({} as Pedido);
    }
    getPedidos(status: string){
      return Promise.resolve([] as Pedido[]);
    }

    updatePedido(id: number, status: string){
      return Promise.resolve({} as Pedido);
    }

}

export default PedidoRepository;