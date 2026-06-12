class Usuario {
  constructor(nome) {
    this.nome = nome
  }
}
class Professor extends Usuario {
    constructor(nome){
    super(nome)
    }
  lancarNota() {
    return `${this.nome} lance a nota do Aluno no sistema`;
  }
}
class Aluno extends Usuario {
     constructor(nome){
        super(nome)
     }
  entregarAtividade() {
    return `${this.nome} não esqueça de entregar a atividade no prazo`;
  }
}
const sistemaProfessor = new Professor("Jailson");
const sistemaAluno = new Aluno("Beatriz");
console.log(sistemaProfessor.lancarNota());
console.log(sistemaAluno.entregarAtividade());
