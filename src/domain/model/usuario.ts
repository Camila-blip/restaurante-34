class Usuario {
    constructor(
        public id: number,
        public tipoAcesso: TipoAcesso,
        public login: string,
        public senha: string
    ) {}
}