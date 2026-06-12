class Conta {
  constructor(numero, valor) {
    this.numero = numero;
    this.valor = valor;
  }
  numeroConta() {
    return `O número da conta é: ${this.numero} \n Valor em conta ${this.valor}`;
  }
}
class ContaPoupanca extends Conta {
  constructor(numero, valor, juros) {
    super(numero, valor);
    this.juros = juros;
    let porcentagem = this.juros / 100;
    this.valortotal = porcentagem * this.valor + this.valor;
  }
  valorComJuros() {
    return `Valor total com juros: ${this.valortotal}`;
  }
}
const total = new ContaPoupanca(253678, 50000, 3);
console.log(total.valorComJuros());
