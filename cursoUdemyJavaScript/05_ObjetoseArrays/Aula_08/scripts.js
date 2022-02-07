//metodos de array - split
console.log("-- metodos de array - split --");

let frase = "Um celta e um carro pica, os dois a 80km/h";
console.log(frase.split(" "));

let produtos = "Banana,maça,pera,uva,melão";
console.log(produtos.split(','));

//metodos de array - join
console.log("-- metodos de array - join --");

let palavras = frase.split(" ");
let novaFrase = palavras.join("..");
console.log(novaFrase);

//metodos de array - repeat
console.log("-- metodos de array - repeat --");

let teste = "Repetir ";

console.log(teste.repeat(2));