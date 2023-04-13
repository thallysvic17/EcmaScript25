//map
let meuMap = new Map();
meuMap.set('nome', 'gian');
meuMap.set('stack', 'html, css, js');


console.log(meuMap)

const nome = meuMap.get('nome'); 

console.log(nome)

 console.log(meuMap.size)

 console.log(meuMap.has('sobrenome')) 

// meuMap.clear()

 console.log(meuMap.size)

 for( let chave of meuMap.keys()){  //iterar por cada chave do map 
    console.log(chave);
 }

 for(let valor of meuMap.values()){
    console.log(valor);
 }

 
 for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
 }

 meuMap.delete("stack");
 console.log(meuMap)

 //set

 const cpfs = new Set();

 cpfs.add('66354080020')
 cpfs.add('74159296084')
 cpfs.add('75944120010')

 console.log(cpfs)

 cpfs.forEach((valor)=> {
    console.log(valor);
 })

 //muito importante esse conceito 
 const array =['gian souza', 'thallys alves', 'jose paulo ', 'maria isabel', 'gian souza', 'maria isabel']

const arrayComoSet = new Set([...array]);


const arraysemitensDuplicados = [...arrayComoSet] 

console.log(arrayComoSet)
console.log(arraysemitensDuplicados)

