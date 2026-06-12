class Jogo {
  constructor(titulo, plataforma) {
    this.titulo = titulo;
    this.plataforma = plataforma;
  }
  jogar() {
    return `Iniciando ${this.titulo} no ${this.plataforma}`;
  }
}
class JogoRPG extends Jogo {
  constructor(titulo, plataforma, horasDeJogo) {
    super(titulo, plataforma);
    this.horasDeJogo = horasDeJogo;
  }
  jogarHoras() {
    return `${this.jogar()} com ${this.horasDeJogo} horas de jogo`;
  }
}
const horasJogando = new JogoRPG("Roblox", "PlayStore", 60);
console.log(horasJogando.jogarHoras());
