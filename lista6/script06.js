class Contador {
  constructor(valor) {
    this.valor = valor;
  }
  incrementar() {
    this.valor++;
    return `${this.valor}`;
  }
  decrementar() {
    this.valor--;
    return `${this.valor}`;
  }
}
const incremento = new Contador(10);
console.log(incremento.incrementar());
const decremento = new Contador(2)
console.log(decremento.decrementar())