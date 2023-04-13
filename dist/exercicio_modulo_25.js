"use strict";

var alunos = [{
  nome: 'Joao',
  nota: 2
}, {
  nome: 'Maria',
  nota: 4
}, {
  nome: 'Larissa',
  nota: 6
}, {
  nome: 'Paulo',
  nota: 8
}, {
  nome: 'Andre',
  nota: 5
}, {
  nome: 'Luiza',
  nota: 10
}];
var alunosAprovados = function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(function (_ref) {
    var nota = _ref.nota;
    return nota >= 6;
  });
};
var alunosReprovados = function alunosReprovados(arrayAlunos) {
  return arrayAlunos.filter(function (_ref2) {
    var nota = _ref2.nota;
    return nota < 6;
  });
};
console.log('Esses sao os alunos Aprovados', alunosAprovados(alunos));
console.log('Esses sao os alunos Reprovados', alunosReprovados(alunos));