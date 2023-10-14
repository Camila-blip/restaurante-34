// ClienteRepository.ts (interface)

import { Cliente } from "../Entities/cliente";

export interface IClienteRepository {
    create(cliente: Cliente): Promise<Cliente>;
    get(id: number): Promise<boolean>;
}
