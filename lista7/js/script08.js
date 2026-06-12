class ItemPedido {
  constructor( quantidade, preco) {
    this.quantidade = quantidade;
    this.preco = preco;
  }
  totalItem() {
    this.totalprodutos = this.quantidade * this.preco;
    return `O valor total dos produtos é: R$${this.totalprodutos}`;
  }
}
const total = new ItemPedido(30, 10);
console.log(total.totalItem());
