// ClienteRepository.ts (interface)

import { Cliente } from "../model/cliente";

export interface ClienteRepository {
    create(cliente: Cliente): Promise<Cliente>;
    get(id: number): Promise<boolean>;
}
