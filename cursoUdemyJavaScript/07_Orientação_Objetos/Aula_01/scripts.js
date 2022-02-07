//Orientação a Objetos - Métodos
console.log("-- Métodos 01 --");

const cachorro = {
    uivar: function() {
        console.log("Aaaauuuuuuuu");
    },
    rosnar: function() {
        console.log("Grrrrrr");
    }
}
cachorro.uivar();
cachorro.rosnar();

//Orientação a Objetos - Métodos
console.log("\n-- Métodos 02 --");

const gato = {
    raca: 'SDR',
    miar: function(){
        console.log("Miaaaauuuu");
    },
    ronronar: function(){
        console.log("RrRrRrRr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
}
console.log(gato.raca);

gato.setRaca("Malhado");
console.log(gato.raca);

console.log(gato.getRaca());