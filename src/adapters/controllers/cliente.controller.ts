import { ClienteRepository } from "@/domain/repositories/ClienteRepository";
import { Response } from "express";

export default class ClienteController {
    constructor(private clienteRepository: ClienteRepository) {}

    async getCliente(req: any, res: Response) {
        try {
            const { id, nome, cpf, email, data } = req.body;

            // Crie uma instância do cliente com os dados recebidos
            const novoCliente = {
                id,
                nome,
                cpf,
                email,
                data,
            };

            // Chame o método create do repositório
            const clienteCriado = await this.clienteRepository.create(
                novoCliente
            );

            return res.status(400).json({ message: "Sucesso get cliente" });
        } catch (error) {
            return res.status(400).json({ message: "Error get Cliente" });
        }
    }

    async createCliente(req: any, res: Response) {
        try {
            return res.status(400).json({ message: "Sucesso criar cliente" });
        } catch (error) {
            return res.status(400).json({ message: "Error criar cliente" });
        }
    }
}
