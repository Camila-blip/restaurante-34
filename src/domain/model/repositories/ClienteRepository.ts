// ClienteRepository.ts (interface)

export interface ClienteRepository {
    create(cliente: Cliente): Promise<Cliente>;
    get(id: string): Promise<boolean>;
}
