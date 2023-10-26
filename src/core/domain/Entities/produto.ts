import { Decimal } from "@prisma/client/runtime/library";

export interface Produto {
    id: number;
    descricao: string;
    preco: Decimal;
    categoriaProdutoId: number;
}
