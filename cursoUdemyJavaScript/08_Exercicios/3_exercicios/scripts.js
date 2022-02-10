//Exercicios
console.log("-- Exercicio 05 --");

class contaBanco {
    constructor(saldocc, saldocp, juroscp) {
        this.saldocc = saldocc
        this.saldocp = saldocp
        this.juroscp = juroscp
    }

    deposito(valor) {
        this.saldocc += valor
    }

    saque(valor) {
        this.saldocc -= valor
    }

    transferenciaCP(valor) {
        this.saldocc -= valor
        this.saldocp += valor
    }

    transferenciaCC(valor) {
        this.saldocp -= valor
        this.saldocc += valor
    }

    jurosAniversario() {
        let juros = (this.saldocp * this.juroscp) / 100
        this.saldocp += juros
    }
}

class contaEspecial extends contaBanco {
    constructor(saldocc, saldocp, juroscp) {
        super(saldocc, saldocp, juroscp * 2)
    }
}

let conta = new contaBanco(1000, 5000, 1)
console.log(conta)

conta.saque(500)
console.log(conta)

conta.deposito(5000)
console.log(conta)

conta.transferenciaCP(3000)
console.log(conta)

conta.jurosAniversario()
console.log(conta)

let conta2 = new contaEspecial(10000, 50000, 1)
console.log(conta2)

