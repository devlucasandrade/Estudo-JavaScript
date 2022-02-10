//Exercicios
console.log("-- Exercicio 01 --");

class ContaBanco {
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }

    retirada(valor) {
        this.saldo -= valor
    }
}

let conta = new ContaBanco(1000)

conta.deposito(1000)
console.log(conta.saldo)

conta.retirada(500)
console.log(conta.saldo)


//Exercicios
console.log("-- Exercicio 02 --");

class Carinho {
    constructor(itens,qtd,valorTotal) {
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }

    addItem(item) {

        let contador = 0

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item)
        }

        this.qtd += item.qtd
        this.valorTotal += item.preco * item.qtd
    }

    removeItem(item) {

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id){

                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id})

                this.qtd -= this.itens[itemCarrinho].qtd
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

                this.itens.splice(index, 1)
                
            }
        }
    }
}

let  carrinho = new Carinho ([
    {
        id: 01,
        nome: "Camisa",
        qtd: 2,
        preco: 20,
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 1,
        preco: 35,
    }
], 3, 75)

console.log(carrinho)

carrinho.addItem({id: 01, nome: "Camisa", qtd:2, preco: 20})

console.log(carrinho)

carrinho.addItem({id: 03, nome: "Boné", qtd:1, preco: 15})

console.log(carrinho)

carrinho.removeItem({id: 01, nome: "Camisa", qtd:2, preco: 20})

console.log(carrinho)