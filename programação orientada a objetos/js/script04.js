class MembroEscola {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
  }
  DadosBasicos() {
    return `Aluno: ${this.nome} Matricula: ${this.matricula}`;
  }
}
class Aluno extends MembroEscola {
  constructor(nome, matricula, nota) {
    super(nome, matricula);
    this.nota = nota;
  }
  VerificarAprovacao() {
    if (this.nota >= 7) {
      return `${this.DadosBasicos()} Situação: APROVADO`;
    } else {
      return `${this.DadosBasicos()} Situação: REPROVADO`;
    }
  }
}

const alunoDados = new Aluno("Márcio", 12345, 7);
console.log(alunoDados.VerificarAprovacao());
