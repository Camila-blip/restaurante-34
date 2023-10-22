import { Pedido } from "@prisma/client";

export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    data: Date;
    createdAt: Date;
    updateAt: Date;
    usuarioId: number;
    usuario: Usuario;
    pedido: Pedido;
}
