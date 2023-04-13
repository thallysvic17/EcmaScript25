"use strict";

var redesSociais = ['Facebook', 'instagram', 'twitter'];
redesSociais.forEach(function (NomeRedeSocial, indice) {
  console.log(" ".concat(indice, " eu tenho perfil na rede social: ").concat(NomeRedeSocial));
});
var alunos = ['gustavo', 'julia', 'paula', 'thallys'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var paula = alunos2.findIndex(function (item) {
  return item.nome == 'paula';
});
alunos2.push({
  nome: 'lucio',
  curso: 'Backend'
});
console.log(paula);
var todosAlunosSaoFront = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoFront);