// ClienteRepository.ts (interface)

import { Cliente } from "../Entities/cliente";

export interface IClienteRepository {
    create(cliente: Cliente): Promise<Cliente>;
    getByCpf(cpf: string): Promise<Cliente>;
    getById(id: number): Promise<Cliente>;
}
