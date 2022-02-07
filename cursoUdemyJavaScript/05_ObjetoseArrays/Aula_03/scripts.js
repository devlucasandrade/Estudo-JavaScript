//Objetos
console.log("-- Objetos --");

let cachorro = {
    nome: "Turbo",
    patas: 4,
    cor: "caramelo",
    latir: function(){
        console.log("Au Au");
    }
}
console.log(cachorro.nome);
console.log(cachorro.patas);
console.log(cachorro.cor);
cachorro.latir();

// [] = array
// {} = objetos

//Objetos
console.log("-- Objetos 02 --");

let pessoa = {
    nome: "Lucas",
    idade: 41,
    profissao: "Programador",
    salario: 10000
}
console.log(pessoa.nome);

delete pessoa.salario;
console.log(pessoa.salario);

pessoa.casado = true;
console.log(pessoa.casado);


//Assign
console.log("-- Objetos 03 --");

let carro = {
    portas: 2,
    portamalas: "200 lts",
    motor: 2.0
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}
console.log(carro);

Object.assign(carro,adicionais);
console.log(carro);