class Funcionario {
  constructor(salario, nome) {
    this.nome = nome;
    this.salario = salario;
  }
  receberPagamento() {
    return `Pagamento de R$ ${this.salario} realizado para ${this.nome}`;
  }
}
class Gerente extends Funcionario {
  constructor (salario, nome, bonus) {
    super(salario, nome);
    this.bonus = bonus;
  }
pagamento() {
    let pagamento = this.salario + this.bonus;
    return `${this.receberPagamento()} \n O total do salário com bônus é:R$ ${pagamento}`;
  }
}
const pagamentoTotal = new Gerente(3000, "Júlio", 1000);
console.log(pagamentoTotal.pagamento());
