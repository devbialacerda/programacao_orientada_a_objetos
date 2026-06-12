class Forma{
    desenhar(){
        return`Desenhe uma forma geométrica`
    }
}
class Circulo extends Forma{
    desenhar(){
        return`Desenhe um círculo`
    }
}
class Quadrado extends Forma{
    desenhar(){
        return`Desenhe um quadrado`
    }
}
const DesenhoForma = new Forma()
const DesenhoCirculo = new Circulo()
const DesenhoQuadrado = new Quadrado()
console.log(DesenhoForma.desenhar())
console.log(DesenhoCirculo.desenhar())
console.log(DesenhoQuadrado.desenhar())


