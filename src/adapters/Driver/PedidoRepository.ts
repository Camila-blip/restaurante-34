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
    async getPedidoById(id: number){
      try {
        const pedido_response =  await this.prismaClient.pedido.findUnique({
          where: {
            id: id
          }
        });
        return pedido_response;
      } catch (error) {
        throw error;
      };
    }
    async getPedidos(){
      try {
        const pedido_response =  await this.prismaClient.pedido.findMany({
          include: {
            statusPedido: {
              select: {
                enumerador: true
              }
            },
            cliente: {
              select: {
                nome: true
              }
            }
          }
        });
        return pedido_response;
      } catch (error) {
        throw error;
      }
    }

    updatePedido(id: number, status: string){
      return Promise.resolve({} as Pedido);
    }

    async getPedidosByStatus(status: string){
      try {
        const pedido_response =  await this.prismaClient.pedido.findMany({
          where: {
            statusPedido: {
              enumerador: {
                equals: status
              }
            }
          },
          include: {
            cliente: {
              select: {
                nome: true
              }
            },
            statusPedido: {
              select: {
                enumerador: true
              }
            }
          }
        });
        return pedido_response;
      } catch (error) {
        throw error;
      };
    }

}

export default PedidoRepository;