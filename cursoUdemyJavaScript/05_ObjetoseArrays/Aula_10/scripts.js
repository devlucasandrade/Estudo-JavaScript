//JSON
console.log("-- JSON --");

let pessoa ={
    "nome": "Lucas",
    "idade": "41",
}

console.log(pessoa.nome);
console.log(pessoa.idade);

//JSON string
console.log("-- JSON string --");

let cliente = {
    "nome": "Débora",
    "idade": 38,
    "profissão": "Jornalista",
    "hobbies": ["Séries Stream","Dormir","Comer"]
}

let clienteTexto = JSON.stringify(cliente);
console.log(clienteTexto);

let clienteJSON = JSON.parse(clienteTexto);
console.log(clienteJSON);
console.log(clienteJSON.hobbies[2]);