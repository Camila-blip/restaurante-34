import { IPedidoRepository } from "@/core/domain/repositories/IPedidoRepository";
import { Pedido } from "@prisma/client";

class PedidoRepository implements IPedidoRepository{

    create(pedido: Pedido){
      return Promise.resolve({} as Pedido);
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