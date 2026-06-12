class Filme {
  constructor(titulo, anolocamento) {
    this.titulo = titulo;
    this.anolocamento = anolocamento;
  }
  anoFilme() {
    let ano = 2026 - this.anolocamento;
    if (ano > 10) {
      return `O Filme ${this.titulo} possui mais de 10 anos de lançamento`;
    } else if ((ano == 10)) {
      return `O Filme ${this.titulo} possui 10 anos de lançamento`;
    } else {
      return `O Filme ${this.titulo} possui menos que 10 anos de lançamento`;
    }
  }
}
const filme1 = new Filme("Crepúsculo", 2008);
const filme2 = new Filme ("Maze Runner: A Cura Mortal", 2018)
const filme3 = new Filme ("Deadpool", 2016)
console.log (filme1.anoFilme())
console.log (filme2.anoFilme())
console.log (filme3.anoFilme())


