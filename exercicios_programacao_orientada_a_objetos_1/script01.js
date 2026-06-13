class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  dados() {
    return `O livro ${this.titulo} foi escrito por ${this.autor}`;
  }
}
const dadosLivro = new Livro("A Revolução dos Bichos", "George Orwell");
console.log(dadosLivro.dados());
