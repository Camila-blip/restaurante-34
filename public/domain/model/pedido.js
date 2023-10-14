"use strict";
var Pedido = /** @class */ (function () {
    function Pedido(id, statusPedido, produtos, statusPagamento, cliente) {
        this.id = id;
        this.statusPedido = statusPedido;
        this.produtos = produtos;
        this.statusPagamento = statusPagamento;
        this.cliente = cliente;
    }
    return Pedido;
}());
