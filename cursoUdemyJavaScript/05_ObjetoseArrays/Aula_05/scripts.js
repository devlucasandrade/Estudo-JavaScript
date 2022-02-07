//metodos de array - push e pop
console.log("-- metodos de array - push e pop --");

let nomes = ["Lucas","Débora","Any"];

let elementoRemovido = nomes.pop();
console.log(elementoRemovido);
console.log(nomes);

nomes.push("Mariazinha");
console.log(nomes);

//metodos de array - shift e unshift
console.log("-- metodos de array - shift e unshift --");

let carros = ["Chevette","Gol","Kombi"];

let removePrimeiroCarro = carros.shift();

console.log(removePrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel');
console.log(carros);

//metodos de array - indexOf e lastIndexOf
console.log("-- metodos de array - indexOf e lastIndexOf --");

let numeros = [6,4,5,9,7,8];

console.log(numeros.indexOf(4));
console.log(numeros.lastIndexOf(9));