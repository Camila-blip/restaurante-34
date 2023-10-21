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

    async put(produto: Produto): Promise<Produto> {
        try {
            const putResponse = await this.prismaClient.produto.update({
                where: { id: produto.id },
                data: {
                    descricao: produto.descricao,
                    preco: produto.preco,
                    categoria: produto.categoria,
                },
            });
            return {
                id: putResponse.id,
                descricao: putResponse.descricao,
                preco: putResponse.preco,
                categoria: putResponse.categoria,
            } as Produto;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<Produto> {
        try {
            const deleteResponse = await this.prismaClient.produto.delete({
                where: {
                    id: id,
                },
            });
            return deleteResponse as Produto;
        } catch (error) {
            throw error;
        }
    }
}

export default ProdutoRepository;
