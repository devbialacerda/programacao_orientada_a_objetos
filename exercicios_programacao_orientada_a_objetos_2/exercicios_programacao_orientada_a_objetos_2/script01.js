class Animal {
  emitirSom() {
    return `som de um animal`;
  }
}
class Cachorro extends Animal {
  emitirSom() {
    return `Latido`;
  }
}
const somCachorro = new Cachorro();
console.log(somCachorro.emitirSom());
