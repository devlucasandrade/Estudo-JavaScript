//Orientação a Objetos - Classes
console.log("-- Classes --");

class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador',4,'Amarelo');
console.log(labrador);

//Orientação a Objetos - Constructor
console.log("\n-- Constructor --");

class Gato{
    constructor(racagato,patasgato,corgato){
        this.racagato = racagato;
        this.patasgato = patasgato;
        this.corgato = corgato;
    }

    miar(){
        console.log("Miau");
    }
}

Gato.prototype.racagato = 'Amarelo';
Gato.prototype.patasgato = 4

let frajola = new Gato('Frajola',4,'Preto e branco');
console.log(frajola);