
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try{ 
        function funcaoMuitoPesada(){
            let execucoes = 0;
            for(let i =0; i < 1000000000; i++){
                execucoes ++
            }
            return execucoes;
        }  
        resolve(execucoes)
    }catch(e){
        reject('Deu erro na iteraçao dos numeros')
    }
})


async function execucaoPrincipal(){
    console.log('inicio')
    
   // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
   const resultado = await funcaoMuitoPesadaPromise;
    
    console.log('fim')
}

execucaoPrincipal()



const promiseComParametros = (login, senha) => new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(`logado com o usuario ${login}`)
    }, 3000);
})

promiseComParametros('gian@gmail.com', 123456).then(resultado => console.log(resultado))