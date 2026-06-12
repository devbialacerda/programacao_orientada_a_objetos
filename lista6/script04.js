class Carro{
    constructor(velocidade){
        this.velocidade = 0
    }
    acelerar(){
        this.velocidade += 10
        return`O carro acelerou ${this.velocidade} km/h`
    }
}
const aceleracao = new Carro()
console.log (aceleracao.acelerar())