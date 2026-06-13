class Animal {
  constructor(nome) {
    this.nomeDoAnimal = nome;
  }
  apresentacaoAnimalSom() {
    return `Este animal faz um som`;
  }
}
class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }
  latir() {
    return `Au Au`;
  }
}
const Fred = new Cachorro("Fred");
console.log(`${Fred.nomeDoAnimal} diz: ${Fred.latir()}`);
