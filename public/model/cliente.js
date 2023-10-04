"use strict";
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf, email, data) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.data = data;
    }
    Cliente.prototype.exibirInfo = function () {
        console.log("ID: ".concat(this.id));
        console.log("Nome: ".concat(this.nome));
        console.log("CIF: ".concat(this.cpf));
        console.log("Email: ".concat(this.email));
        console.log("Data: ".concat(this.data));
    };
    return Cliente;
}());
