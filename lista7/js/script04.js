class Veiculo{
    mover(){
 return`Um veículo está se movendo`
    }
}
class Carro extends Veiculo{
    mover(){
        return`O carro está se movendo`
    }
}
class Aviao extends Veiculo{
    mover(){
        return`O avião está se movendo`
    }
}
const carro = new Carro()
const aviao = new Aviao()
console.log(carro.mover())
console.log(aviao.mover())