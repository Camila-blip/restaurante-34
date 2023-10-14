import { ClienteRepository } from "@/domain/repositories/ClienteRepository";
import { Cliente } from "@/domain/model/cliente";

export class ClienteInMemoryRepository implements ClienteRepository {
    async create(cliente: Cliente): Promise<Cliente> {
        console.log("aquinocreate");
        return cliente;
    }

    async get(cpf: number): Promise<boolean> {
        console.log("aquinoget");
        return false;
    }
}

export default ClienteInMemoryRepository;
