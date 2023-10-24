import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/ports/IProdutoRepository";
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
                    cardapio: produto.cardapio,
                    ProdutosDoPedido: produto.ProdutosDoPedido,
                    categoriaProduto: produto.categoriaProduto,
                    pedido: produto.pedido,
                    descricao: produto.descricao,
                    preco: produto.preco,
                    categoria: produto.categoria,
                },
            });
            console.log("creationResponse", creationResponse);
            return {
                id: creationResponse.id,
                // cardapio: creationResponse.cardapio,
                // ProdutosDoPedido: creationResponse.ProdutosDoPedido,
                // categoriaProduto: creationResponse.categoriaProduto,
                // pedido: creationResponse.pedido,
                descricao: creationResponse.descricao,
                preco: creationResponse.preco,
                categoria: creationResponse.categoria,
            } as Produto;
        } catch (error) {
            console.log("error", error);
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
