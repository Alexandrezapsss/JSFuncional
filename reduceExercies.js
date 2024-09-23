//reduce alem da função passando um acumulador
const numeros = [2,56,8,14,20];

const total = (num, acc) => num + acc;

const totalNumeros = numeros.reduce(total, 0);
console.log(totalNumeros);

//dado um carrinho de compras calcular o total da compra

const carrinho = [
    {nomeProduto : 'Caneta', qtde : 3, valorUnitario : 7.99},
    {nomeProduto : 'Impressora', qtde : 1, valorUnitario : 7.99},
    {nomeProduto : 'Caderno', qtde : 4, valorUnitario : 7.99},
    {nomeProduto : 'Tesoura', qtde : 10, valorUnitario : 7.99}
];

const totalItem = carrinho.map((item) => ({...item, 'totalProd' : (item.qtde * item.valorUnitario)}));

const calculoTotal = (acc, data) => acc + data.totalProd;

const carrinhoTotal = totalItem.reduce(calculoTotal, 0);

console.log(`Total da sua compra é: R$${carrinhoTotal}`);