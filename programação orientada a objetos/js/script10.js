class Dispositivo {
  constructor(nome, ligado) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    this.ligado = true;
  }
  desligar() {
    this.ligado = false;
  }
}
class LampadaInteligente extends Dispositivo {
  constructor(nome, ligado, cor) {
    super(nome, ligado);
    this.cor = cor;
  }
  verifiacaoLuz() {
    if (this.ligado == true) {
      return `A ${this.nome} está ligada e sua cor é ${this.cor}`;
    } else {
      return `A luz está desligada`;
    }
  }
}
const luz = new LampadaInteligente("luz da sala", true, "azul");
//console.log(luz.verifiacaoLuz());
luz.ligar()
console.log(luz.verifiacaoLuz())

