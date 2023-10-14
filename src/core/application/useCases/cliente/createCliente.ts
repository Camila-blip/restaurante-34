import { Cliente } from "@/domain/model/cliente";
import { ClienteRepository } from "@/domain/repositories/ClienteRepository";

export class CreateClienteUseCase {
    constructor(private clienteRepository: ClienteRepository) {}

    async execute(clienteData: Cliente): Promise<Cliente> {
        try {
            // Aqui você pode adicionar lógica de validação ou manipulação de dados, se necessário.

            // Chame o método create do repositório para criar um novo cliente
            const novoCliente = await this.clienteRepository.create(
                clienteData
            );

            return novoCliente;
        } catch (error) {
            // Lide com erros ou exceções, se necessário.
            throw new Error("Erro ao criar cliente");
        }
    }
}
