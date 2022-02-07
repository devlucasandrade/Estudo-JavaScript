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
