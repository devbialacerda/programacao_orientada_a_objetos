class Funcionario {
  constructor(nome, salario, funcao) {
    this.nome = nome;
    this.salario = salario;
    this.funcao = funcao
  }
  infoFuncionario(){
    return`${this.funcao} \n Nome: ${this.nome} Salário: R$${this.salario}`
  }
}
class Gerente extends Funcionario{
    constructor(nome, salario, funcao, departamento){
        super(nome, salario, funcao)
        this.departamento = departamento
    }
    infoGerente(){
        return `${this.infoFuncionario()} Departamento:${this.departamento}`
    }
}
const funcionario = new Funcionario ("Ricardo", 2000, "Funcionário")
const gerente = new Gerente ("Julia", 3000, "Gerente", "Recursos Humanos")
console.log (funcionario.infoFuncionario())
console.log(gerente.infoGerente())