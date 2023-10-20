import { Produto } from "@/core/domain/Entities/produto";
import { IProdutoRepository } from "@/core/domain/repositories/IProdutoRepository";
import { PrismaClient } from "@prisma/client";

class ProdutoRepository implements IProdutoRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }
    async create(produto: Produto): Promise<Produto> {
        try {
            const creationResponse = await this.prismaClient.produto.create({
                data: {
                    descricao: produto.descricao,
                    preco: produto.preco,
                    categoria: produto.categoria,
                },
            });

            return {
                id: creationResponse.id,
                descricao: creationResponse.descricao,
                preco: creationResponse.preco,
                categoria: creationResponse.categoria,
            } as Produto;
        } catch (error) {
            throw error;
        }
    }
}

export default ProdutoRepository;
