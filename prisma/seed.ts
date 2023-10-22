/* eslint-disable */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // Tipos de Acesso
    const adminTipoAcesso = await prisma.tipoAcesso.upsert({
        where: { enumerador: 'Admin' },
        update: {},
        create: {
        enumerador: 'Admin',
        },
    });

    const clienteTipoAcesso = await prisma.tipoAcesso.upsert({
        where: { enumerador: 'Cliente' },
        update: {},
        create: {
        enumerador: 'Cliente',
        },
    });

    const funcionarioTipoAcesso = await prisma.tipoAcesso.upsert({
        where: { enumerador: 'Funcionário' },
        update: {},
        create: {
        enumerador: 'Funcionário',
        },
    });

    // Usuários
    const admin = await prisma.usuario.upsert({
        where: { login: 'admin', tipoAcesso: 'Admin' },
        update: {},
        create: {
        tipoAcesso: 'Admin',
        login: 'admin',
        senha: 'adminpass',
        },
    });

    const clientes = [  
        {
        nome: 'João Silva',
        login: 'joao123',
        senha: 'joaopass',
        },
        {
        nome: 'Maria Santos',
        login: 'maria456',
        senha: 'mariapass',
        },
        {
        nome: 'Pedro Oliveira',
        login: 'pedro789',
        senha: 'pedropass',
        },
        {
        nome: 'Ana Rocha',
        login: 'ana101',
        senha: 'anapass',
        },
        {
        nome: 'Ricardo Sousa',
        login: 'ricardo2022',
        senha: 'ricardopass',
        },
    ];

    const funcionarios = [
        {
        nome: 'Carlos Pereira',
        login: 'carlos1',
        senha: 'carlospass',
        cargo: 'Atendente',
        admin: 'Não',
        },
        {
        nome: 'Sandra Lima',
        login: 'sandra2',
        senha: 'sandrapass',
        cargo: 'Gerente',
        admin: 'Não',
        },
        {
        nome: 'Lucas Costa',
        login: 'lucas3',
        senha: 'lucaspass',
        cargo: 'Técnico',
        admin: 'Não',
        },
        {
        nome: 'Fernanda Oliveira',
        login: 'fernanda4',
        senha: 'fernandapass',
        cargo: 'Atendente',
        admin: 'Não',
        },
    ];

    for (const cliente of clientes) {
        await prisma.usuario.upsert({
        where: { login: cliente.login, tipoAcesso: 'Cliente' },
        update: {},
        create: {
            tipoAcesso: 'Cliente',
            login: cliente.login,
            senha: cliente.senha,
            cliente: {
            create: {
                nome: cliente.nome,
                email: `${cliente.login}@example.com`,
                cpf: Math.floor(Math.random() * 10000000000).toString(),
            },
            },
        },
        });
    }

    for (const funcionario of funcionarios) {
        await prisma.usuario.upsert({
        where: { login: funcionario.login, tipoAcesso: 'Funcionário' },
        update: {},
        create: {
            tipoAcesso: 'Funcionário',
            login: funcionario.login,
            senha: funcionario.senha,
            funcionario: {
            create: {
                nome: funcionario.nome,
                cargo: funcionario.cargo,
                admin: funcionario.admin,
            },
            },
        },
        });
    }

    // StatusPedido
    const statusPedido1 = await prisma.statusPedido.upsert({
        where: { enumerador: 'Recebido' },
        update: {},
        create: {
        enumerador: 'Recebido',
        },
    });

    const statusPedido2 = await prisma.statusPedido.upsert({
        where: { enumerador: 'Em preparação' },
        update: {},
        create: {
        enumerador: 'Em preparação',
        },
    });

    const statusPedido3 = await prisma.statusPedido.upsert({
        where: { enumerador: 'Pronto' },
        update: {},
        create: {
        enumerador: 'Pronto',
        },
    });

    const statusPedido4 = await prisma.statusPedido.upsert({
        where: { enumerador: 'Finalizado' },
        update: {},
        create: {
        enumerador: 'Finalizado',
        },
    });

    // StatusPagamento
    const statusPagamento1 = await prisma.statusPagamento.upsert({
        where: { enumerador: 'Aguardando' },
        update: {},
        create: {
        enumerador: 'Aguardando',
        },
    });

    const statusPagamento2 = await prisma.statusPagamento.upsert({
        where: { enumerador: 'Pago' },
        update: {},
        create: {
        enumerador: 'Pago',
        },
    });

    const statusPagamento3 = await prisma.statusPagamento.upsert({
        where: { enumerador: 'Não Pago' },
        update: {},
        create: {
        enumerador: 'Não Pago',
        },
    });

    // CategoriaProduto
    const categoriaProduto1 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Lanche' },
        update: {},
        create: {
        enumerador: 'Lanche',
        },
    });

    const categoriaProduto2 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Acompanhamento' },
        update: {},
        create: {
        enumerador: 'Acompanhamento',
        },
    });

    const categoriaProduto3 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Bebida' },
        update: {},
        create: {
        enumerador: 'Bebida',
        },
    });

    const categoriaProduto4 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Sobremesa' },
        update: {},
        create: {
        enumerador: 'Sobremesa',
        },
    });
        
    console.log('Seed data upserted.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });