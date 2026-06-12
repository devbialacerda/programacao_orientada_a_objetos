class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        return`Olá meu nome é ${this.nome}`
    }
}
const falar = new Pessoa ("Beatriz")
console.log (falar.falar())