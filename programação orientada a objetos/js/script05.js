class Prato {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  descrever(){
    return `Prato:${this.nome} - R$${this.preco}`
  }
}
class PratoVegano extends Prato{
    constructor(nome,preco){
        super(nome,preco)
    }
    mostrar(){
        return `${this.descrever()} 100% Vegano`
    }
}
const pratoVeganoFinal = new PratoVegano(" Salada", 20)
console.log (pratoVeganoFinal.mostrar())