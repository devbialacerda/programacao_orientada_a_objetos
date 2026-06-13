class Personagem {
  constructor(nomeReal, codeNome) {
    this.nomeReal = nomeReal;
    this.codeNome = codeNome;
  }
  revelarIdentidade() {
    return `O nome verdadeiro do ${this.codeNome} é ${this.nomeReal}`;
  }
}
class SuperHeroi extends Personagem {
  constructor(nomeReal, codeNome, superPoder) {
    super(nomeReal, codeNome);
    this.superPoder = superPoder;
  }
  usarPoder() {
    return `O ${this.codeNome} usou seu poder de${this.superPoder}`;
  }
}
const poderBatman = new SuperHeroi(" Bruce Wayne ", " Batman ", " preparo ");
console.log(poderBatman.usarPoder());
//console.log(poderBatman.revelarIdentidade())