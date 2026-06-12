class Carro{
    constructor(modelo, marca,ano,placa){
        this.modeloDoCarro = modelo
        this.marcaDoCarro = marca
        this.anoDoCarro = ano
        this.placaDoCarro = placa
    }
}
const carroDoJailson = new Carro("Fiat 147","Fiat",1992,"AB12C34")
const carroDoDavi = new Carro("Dolphin","BYD",2024,"AB12C34")
const carroDaGeorgea = new Carro("Renegade","Jeep",2020,"AB12C34")
 
console.log("Os dados do 1º carro é Modelo do carro: " + carroDoJailson.modeloDoCarro + ", Marca do carro é : "+ carroDoJailson.marcaDoCarro + ", Ano do carro: " + carroDoJailson.anoDoCarro + ", Placa do carro: " + carroDoJailson.placaDoCarro)
console.log("Os dados do 2º carro é Modelo do carro: " + carroDoDavi.modeloDoCarro + ", Marca do carro é : "+ carroDoDavi.marcaDoCarro + ", Ano do carro: " + carroDoDavi.anoDoCarro + ", Placa do carro: " + carroDoDavi.placaDoCarro)
console.log("Os dados do 3º carro é Modelo do carro: " + carroDaGeorgea.modeloDoCarro + ", Marca do carro é : "+ carroDaGeorgea.marcaDoCarro + ", Ano do carro: " + carroDaGeorgea.anoDoCarro + ", Placa do carro: " + carroDaGeorgea.placaDoCarro)

