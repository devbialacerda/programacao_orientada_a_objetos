class Produto {
  constructor(valor) {
    this.valor = valor;
  }
  aplicarDesconto(porcentagem) {
    this.porcentagem = porcentagem / 100;
    let porcent = this.porcentagem * this.valor;
    let desconto = this.valor - porcent;
    return `O valor do produto é ${this.valor}, mas com desconto ficará ${desconto}`;
  }
}
const valorTotal = new Produto (100)
console.log(valorTotal.aplicarDesconto(10))