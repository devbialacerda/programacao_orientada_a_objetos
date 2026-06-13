class Carro{
    constructor(velocidade){
        this.velocidade = 0
    }
    acelerar(){
        this.velocidade += 10
        return`O carro acelerou ${this.velocidade} km/h`
    }
}
class CarroEletrico extends Carro{
    constructor(velocidade, bateria){
        super(velocidade)
        this.bateria = bateria}
acelerar(){
    return`O carro elétrico acelerou com uma ${this.bateria}`
}
    }

const aceleracao = new Carro()
const carroEletrico = new CarroEletrico("","bateria de íon-lítio")
console.log (aceleracao.acelerar())
console.log (carroEletrico.acelerar())