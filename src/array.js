const redesSociais =['Facebook', 'instagram', 'twitter'];

redesSociais.forEach(function(NomeRedeSocial, indice){
    console.log(` ${indice} eu tenho perfil na rede social: ${NomeRedeSocial}`)
})

const alunos =['gustavo','julia','paula','thallys'];

 const alunos2 = alunos.map(function(itemAtual){
    itemAtual ={
        nome: itemAtual,
        curso:'Frontend'
    } 
    return itemAtual;
})

console.log(alunos2)

const paula = alunos2.findIndex(function(item){
     return item.nome == 'paula'
    
})
alunos2.push({
    nome: 'lucio',
    curso: 'Backend'
})

console.log(paula)

 const todosAlunosSaoFront = alunos2.every(function(item){
   return  item.curso ==='Frontend'
})



console.log(todosAlunosSaoFront)