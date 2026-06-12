class Temperatura {
  constructor(celsius) {
    this.celsius = celsius;
  }
  paraFahrenheit() {
    let fahrenheit = (this.celsius * 9) / 5 + 32;
    return `O valor de celsius ${this.celsius}°C para fahrenheit é ${fahrenheit}`;
  }
}
const conversao = new Temperatura(27);
console.log(conversao.paraFahrenheit());
