class Animal {
  constructor(especie, som) {
    this.especie = especie;
    this.som = som;
  }
  AnimaisESons() {
    return `O ${this.especie} faz ${this.som}`;
  }
}
const cachorro = new Animal("cachorro", "au-au");
const gato = new Animal("gato", "miau");
const passaro = new Animal("passaro", "piu piu");
console.log(cachorro.AnimaisESons());
console.log(gato.AnimaisESons());
console.log(passaro.AnimaisESons());
