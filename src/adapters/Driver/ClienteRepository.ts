import { IClienteRepository } from "@/core/domain/repositories/IClienteRepository";
import { Cliente } from "@/core/domain/Entities/cliente";
import { PrismaClient } from "@prisma/client";

class ClienteRepository implements IClienteRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
      this.prismaClient = prismaClient;
    }

    async create(cliente: Cliente): Promise<Cliente> {
        const creationResponse = await this.prismaClient.cliente.create({
            data: {
                nome: cliente.nome,
                cpf: cliente.cpf,
                email: cliente.email,
                data: cliente.data,
            },
        });

        return {
            id: creationResponse.id,
            nome: creationResponse.nome,
            cpf: creationResponse.cpf,
            email: creationResponse.email,
            data: creationResponse.data,
        } as Cliente;
    }

    async get(id: number): Promise<Cliente> {
      const clienteFound = await this.prismaClient.cliente.findUnique({
        where: {
          id: id,
        },
      });

      if (!clienteFound) {
        throw new Error("Cliente não encontrado");
      }

      return {
        id: clienteFound.id,
        nome: clienteFound.nome,
        cpf: clienteFound.cpf,
        email: clienteFound.email,
        data: clienteFound.data,
      } as Cliente;
    
    }
}

export default ClienteRepository;
