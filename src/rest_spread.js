//rest

function somar() {
    let soma = 0;

    for( let i =0; i < arguments.length; i++){
        soma += arguments[i];
    }

    return soma
   
}

console.log(somar(10,20, 30))

function somarcomRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual)=>{
        total += numeroAtual;
        return total;
    },0)
    return soma;
}

console.log(somarcomRest(10,20,30))

//spread

const numeros =[1,2,3,4]
console.log(...numeros)


const timesDeFutebolDeSp = ['santos', 'palmeiras','atletico','sao paulo'];
const timesDeFutebolDoRio =['timeUm', 'time2','time 3'];

const timesdeFutebol= [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];
console.log(timesdeFutebol)

const carroDaJulia = {
    modelo:'gol',
    marca :'vw',
    potencia :1.6
}

const carroDaAna = {
    ...carroDaJulia,
    potencia :1.8
}

console.log(carroDaAna);

// desestruturaçao 

 //const MotorDoCarroDaAna = carroDaAna.motor; //antigo
 const { potencia: MotorDoCarroDaAna} = carroDaAna; //novo
 const { potencia: MotorDoCarroDaJulia} = carroDaJulia; //novo

 console.log(MotorDoCarroDaAna);
 console.log(MotorDoCarroDaJulia);


 //desestruturaçao de arrays

 const [item1, item2, item3, ...outrostimes] = timesdeFutebol;

 console.log(item1)
 console.log(item2)
 console.log(item3)
console.log(outrostimes)

