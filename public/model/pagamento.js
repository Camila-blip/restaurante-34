"use strict";
var Pagamento = /** @class */ (function () {
    function Pagamento(id, realizado, tipo, data, valor, pedido) {
        this.id = id;
        this.realizado = realizado;
        this.tipo = tipo;
        this.data = data;
        this.valor = valor;
        this.pedido = pedido;
    }
    return Pagamento;
}());
