import { Cliente } from "@/core/domain/Entities/cliente";
import { IClienteRepository } from "@/core/domain/repositories/IClienteRepository";
import { IClienteUseCase } from "./IClienteUseCase";

export class CreateClienteUseCase implements IClienteUseCase{

    private clienteRepository: IClienteRepository;

    constructor(clienteRepository: IClienteRepository) {
      this.clienteRepository = clienteRepository;
    }

    async executeCreation(clienteData: Cliente): Promise<Cliente> {
        try {
            // Aqui você pode adicionar lógica de validação ou manipulação de dados, se necessário.

            // Chame o método create do repositório para criar um novo cliente
            const novoCliente = await this.clienteRepository.create(
                clienteData
            );

            return novoCliente;
        } catch (error) {
            // Lide com erros ou exceções, se necessário.
            throw error;
        }
    }

    async executeGetByCpf(cpf: string): Promise<Cliente> {
      try {
          // Aqui você pode adicionar lógica de validação ou manipulação de dados, se necessário.

          // Chame o método create do repositório para criar um novo cliente
          const foundCliente = await this.clienteRepository.getByCpf(
            cpf
          );

          if (!foundCliente) {
            throw new Error("Cliente não encontrado");
          }

          return foundCliente;
      } catch (error) {
          // Lide com erros ou exceções, se necessário.
          throw error;
      }
  }
}