//Exercicios
console.log("-- Exercicio 03 --");

class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado) {
        this.novoEstado = novoEstado
    }
}

let endereco = new Endereco("Rua dos Pintassilgos","Imbuí","Salvador","BA")

console.log(endereco)

endereco.novaRua = "Rua dos Colibris"

console.log(endereco)

endereco.novaCidade = "Feira de Santana"

console.log(endereco)


//Exercicios
console.log("\n-- Exercicio 04 --");

class Carro {
    constructor(marca, cor, gasolina, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
        this.consumo = consumo
    }

    dirigir(km) {
        
        let litrosConsumidos = km / this.consumo

        this.gasolina -= litrosConsumidos

    }

    abastecer(i) {
        
        this.gasolina += i

    }
}

let carro = new Carro("WV", "Vermelho", 100, 14)

console.log(carro)

carro.dirigir(100)

console.log(carro)

carro.abastecer(10)

console.log(carro)