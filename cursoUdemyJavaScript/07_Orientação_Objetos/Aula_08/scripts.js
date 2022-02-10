//Orientação a Objetos - Getter e setter
console.log("-- Get e set --")

class Cachorro {
    constructor(raca,cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au")
    }

    get getCor() {
        return this.cor
    }

    set setCor(cor) {
        this.cor = cor
    }
}

let pastorAlemao = new Cachorro('Pastor Alemão', 'Sem cor')

console.log(pastorAlemao)

//Orientação a Objetos - Herança (inheritance)
console.log("-- Herança (inheritance) --")

class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

let coiote = new Mamifero(4)
console.log(coiote.patas)

class Gato extends Mamifero {
    constructor(patas,raca) {
        super(patas, patas)
        this.raca = raca
    }

    miar() {
        console.log("Miau")
    }
}

let amarelo = new Gato(4,"Amarelo")
console.log(amarelo.patas)

amarelo.miar()

//Orientação a Objetos - Instanceof
console.log("-- Instanceof --")

console.log(new Gato instanceof Mamifero)

console.log(coiote instanceof Mamifero)