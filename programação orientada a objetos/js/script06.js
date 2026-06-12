class Veiculo {
  constructor(marca, ano) {
    this.marca = marca;
    this.ano = ano;
  }
  informacoesMoto() {
    return `A moto da marca ${this.marca} do ano de ${this.ano}`;
  }
}
class Moto extends Veiculo {
  constructor(marca, ano, cilindradas) {
    super(marca, ano);
    this.cilindradas = cilindradas;
  }
  empinar() {
    return `${this.informacoesMoto()} com ${this.cilindradas}cc está empinando`
  }
}
const MotoFicha = new Moto("Biz", "2026", 123, 9);
console.log(MotoFicha.empinar());
