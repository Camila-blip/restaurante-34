class Cliente {
    constructor(
        public id: number,
        public nome: string,
        public cpf: string,
        public email: string,
        public data: Date
    ) {}

    exibirInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CIF: ${this.cpf}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data: ${this.data}`);
    }
}