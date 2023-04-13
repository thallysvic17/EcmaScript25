class Pokemon {
    #hp = 100;
    
    constructor(nomePokemon, tipoPokemon){
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuataque(){
       this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp)
    }
}


class Pikachu extends Pokemon{
    constructor(){
        super('pikachu','eletrico')
    }
    atacar(){
        console.log(`${this.nome} atacou com choque do trovao`)
    }
}

const pikachuDoAsh = new Pikachu();


pikachuDoAsh.recebeuataque();


pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();



const pikachu = new Pokemon('pikachu', 'eletrico');
//pikachu.atacar('choque do trovao')



console.log(pikachu)
console.log(pikachuDoAsh)