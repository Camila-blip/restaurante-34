class Produto {
    constructor(
        public id: number,
        public descricao: string,
        public preco: number,
        public categoria: Categoria
    ) {}
}