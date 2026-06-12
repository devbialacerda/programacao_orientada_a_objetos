class Produto {
  constructor(nome, precoBase) {
    this.nome = nome;
    this.precoBase = precoBase;
  }
  produto() {
    return `
    Nome do produto: ${this.nome}
    Preço do produto R$ ${this.precoBase}`;
  }
}
class ProdutoImportado extends Produto {
  constructor(nome, precoBase, taxa) {
    super(nome, precoBase);
    this.taxa = taxa;
  }
  calcularPrecoFinal() {
    let total = this.precoBase * this.taxa + this.precoBase;
    return `${this.produto()} 
    Taxa do produto: ${this.taxa} valor total com taxa: ${total}`;
  }
}
const InfoProduto = new ProdutoImportado("Celular Iphone 16", 5000, 0.15);
console.log(InfoProduto.calcularPrecoFinal());
