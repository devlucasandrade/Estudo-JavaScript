//Orientação a Objetos - Classes
console.log("-- Classes --");

let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro);
labrador.latir();
labrador.raca = "Labrador";
console.log(labrador.raca);

console.log(cachorro.raca);

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);

//Orientação a Objetos - Classes: construtor por função
console.log("\n-- Classes: construtor por função --");

function criarCachorro(raca,patas,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au");
    }
    return cachorro;
}

let doberman = criarCachorro('Doberman',4,'Preta');
console.log(doberman);
doberman.latir();