class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  calcularArea() {
    let area = this.altura * this.largura;
    return `A área do retângulo é ${area}`;
  }
}
const calculoArea = new Retangulo(2, 2);
console.log(calculoArea.calcularArea());
