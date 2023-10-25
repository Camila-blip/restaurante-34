import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/ports/IProdutoRepository";
import { PrismaClient } from "@prisma/client";

class ProdutoRepository implements IProdutoRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }
    put(produto: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    async create(produto: Produto): Promise<Produto> {
        try {
            const creationResponse = await this.prismaClient.produto.create({
                data: {
                    categoriaProdutoId: produto.categoriaProdutoId,
                    descricao: produto.descricao,
                    preco: produto.preco,
                },
            });

            return {
                id: creationResponse.id,
                categoriaProdutoId: creationResponse.categoriaProdutoId,
                descricao: creationResponse.descricao,
                preco: creationResponse.preco,
            } as Produto;
        } catch (error) {
            throw error;
        }
    }

    async update(produto: Produto): Promise<Produto> {
        try {
            const putResponse = await this.prismaClient.produto.update({
                where: { id: produto.id },
                data: {
                    categoriaProdutoId: produto.categoriaProdutoId,
                    descricao: produto.descricao,
                    preco: produto.preco,
                },
            });

            return {
                id: putResponse.id,
                categoriaProdutoId: produto.categoriaProdutoId,
                descricao: produto.descricao,
                preco: produto.preco,
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
