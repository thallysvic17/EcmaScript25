const alunos =[
    {nome: 'Joao', nota: 2},
    {nome: 'Maria', nota: 4},
    {nome: 'Larissa', nota: 6},
    {nome: 'Paulo', nota: 8},
    {nome: 'Andre', nota: 5},
    {nome: 'Luiza', nota: 10}
];


const alunosAprovados = (arrayAlunos) =>  arrayAlunos.filter(({nota}) => nota >= 6);



const alunosReprovados =(arrayAlunos) => arrayAlunos.filter(({nota})=> nota < 6);





console.log('Esses sao os alunos Aprovados' ,alunosAprovados(alunos));

console.log('Esses sao os alunos Reprovados', alunosReprovados(alunos));

