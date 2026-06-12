class Conta {
  constructor(saldo, saque) {
    this.saldo = saldo;
    this.saque = saque;
  }
  sacar() {
    if (this.saque > this.saldo) {
      return `Não é possível sacar, não possui saldo suficiente.`;
    } else {
      this.saquevalor = this.saldo - this.saque;
      return `O Saque no valor de R$ ${this.saque} foi concluído com sucesso.\n Saldo atual R$${this.saquevalor}`;
    }
  }
}
const saque = new Conta(5000, 3000);
console.log(saque.sacar());
