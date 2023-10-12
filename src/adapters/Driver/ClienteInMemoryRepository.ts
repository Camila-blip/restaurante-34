import { ClienteRepository } from "@/domain/repositories/ClienteRepository";
import { Cliente } from "@/domain/model/cliente";

class ClienteInMemoryRepository implements ClienteRepository {
    private clientes: Cliente[] = [];

    async create(cliente: Cliente): Promise<Cliente> {
        this.clientes.push(cliente);
        return cliente;
    }

    async get(id: string): Promise<boolean> {
        const index = this.clientes.findIndex((c) => c.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default ClienteInMemoryRepository;
