class Midia {
  constructor(titulo) {
    this.tituloDaMidia = titulo;
  }
}
class Filme extends Midia {
  constructor(titulo, duracao) {
    super(titulo);
    this.duracaoDaMidia = duracao;
  }
  mostrar() {
    return (
      `O filme ${this.tituloDaMidia} tem ${this.duracaoDaMidia} minutos de duração`
    );
  }
}
const MidiaFilme = new Filme("Maze Runner", "113");
console.log(MidiaFilme.mostrar());
