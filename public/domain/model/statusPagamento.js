"use strict";
var _a;
var StatusPagamento;
(function (StatusPagamento) {
    StatusPagamento["APROVADO"] = "Aprovado";
    StatusPagamento["CANCELADO"] = "Cancelado";
    StatusPagamento["AGUARDANDO_PAGAMENTO"] = "Aguardando pagamento";
    StatusPagamento["FALHA_NO_PAGAMENTO"] = "Falha no pagamento";
})(StatusPagamento || (StatusPagamento = {}));
var StatusPagamentoID = (_a = {},
    _a[StatusPagamento.APROVADO] = 101,
    _a[StatusPagamento.CANCELADO] = 102,
    _a[StatusPagamento.AGUARDANDO_PAGAMENTO] = 103,
    _a[StatusPagamento.FALHA_NO_PAGAMENTO] = 104,
    _a);
