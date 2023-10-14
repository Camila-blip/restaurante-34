import { IClienteRepository } from "@/core/domain/repositories/IClienteRepository";
import { Cliente } from "@/core/domain/Entities/cliente";

class ClienteInMemoryRepository implements IClienteRepository {
    private clientes: Cliente[] = [];

    async create(cliente: Cliente): Promise<Cliente> {
        this.clientes.push(cliente);
        return cliente;
    }

    async get(id: number): Promise<boolean> {
        const index = this.clientes.findIndex((c) => c.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default ClienteInMemoryRepository;
