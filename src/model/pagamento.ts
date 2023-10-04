class Pagamento {
    constructor(
        public id: number,
        public realizado: boolean,
        public tipo: String,
        public data: Date,
        public valor: number,
        public pedido: number
    ) {}
}