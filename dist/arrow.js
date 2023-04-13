"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "diz Ola";
};
var retornaUmcarro = function retornaUmcarro() {
  return {
    modelo: 'ka',
    fabricante: 'ford'
  };
};
console.log(minhaFuncao());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);