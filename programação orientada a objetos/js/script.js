class Carro {
  constructor(marca) {
    this.marcaDoCarro = marca;
  }
  apresentacaoMarca() {
    return "A marca do carro é: " + this.marcaDoCarro;
  }
}

class ModeloDoCarro extends Carro {
  constructor(marca, modelo) {
    super(marca);
    this.modeloDoCarro = modelo;
  }
  mostrar() {
    return this.apresentacaoMarca() + ". É um " + this.modeloDoCarro;
  }
}
const CarroDaBia = new ModeloDoCarro("Fiat", "Uno");
console.log(CarroDaBia.mostrar());
