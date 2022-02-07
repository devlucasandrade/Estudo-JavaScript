//object.keys
console.log("-- object.keys --");

let objeto = {
    'chave 1': 1,
    'chave 2': 2,
    'chave 3': 3
}
console.log(objeto);

console.log(Object.keys(objeto));

//mutação
console.log("-- Mutação de objetos --");

let pessoa = {
    nome: "Lucas",
}

let pessoa2 = pessoa;
console.log(pessoa == pessoa2);

pessoa2.nome = "Débora";
console.log(pessoa.nome);

pessoa.nome = "Joana";
console.log(pessoa2.nome);

//loop array
console.log("-- loop array --");

let nomes = ["Lucas","Débora","Any"];

for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i]);
}