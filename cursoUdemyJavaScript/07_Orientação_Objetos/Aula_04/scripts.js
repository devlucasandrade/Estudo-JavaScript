//Orientação a Objetos - Classes
console.log("-- Classes --");

function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuu");
    }
}

let husky = new Cachorro('Husky',4,'Branco e Cinza');
console.log(husky);
husky.uivar();

//Orientação a Objetos - Prototype 02
console.log("\n-- Prototype 02 --");

function Gato(racagato,patasgato,corgato){
    this.racagato = racagato;
    this.patasgato = patasgato;
    this.corgato = corgato;
}
Gato.prototype.ronronar = function(){
    console.log("RrRrRrRr");
}
Gato.prototype.miar = function(){
    console.log("Miiiaaauuuu");
}

let amarelo = new Gato('Amarelo',4,'Amarelo com manchas brancas');
amarelo.ronronar();
amarelo.miar();