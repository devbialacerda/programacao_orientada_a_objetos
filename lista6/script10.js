class Lampada {
  constructor(ligada) {
    this.ligada = ligada;
  }
  desligar() {
    this.ligada = false;
    return `A lâmpada está apagada`;
  }
  ligar() {
    this.ligada = true;
    return `A lâmpada está acessa`;
  }
}
const estado = new Lampada (false)
console.log(estado.desligar())
console.log(estado.ligar())