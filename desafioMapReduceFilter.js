//desafio map, reduce, filter usar chat GPT proibido, no maximo usar documentação JS - ideal não usar
const carrinho = [
    {nomeProduto : 'Caneta', qtde : 3, valorUnitario : 7.99, fragil : true},
    {nomeProduto : 'Impressora', qtde : 1, valorUnitario : 7.99, fragil : true},
    {nomeProduto : 'Caderno', qtde : 4, valorUnitario : 7.99, fragil : false},
    {nomeProduto : 'Tesoura', qtde : 10, valorUnitario : 7.99, fragil : false}
];

//1 quero somete os produtos frageis - ok
//2 quero uma lista com as quantidades * o valor unitario - ok
//3 quero uma media desta lista (valor total / quantidade da lista)

const frageis = carrinho.filter(item => item.fragil == true);

const totalItemCarrinho = frageis.map(item => item.valorUnitario * item.qtde);

const totalCarrinho =(item, acc) => item + acc;

const totalCompra = totalItemCarrinho.reduce(totalCarrinho, 0);

const media = totalCompra / totalItemCarrinho.length;

console.log(`O total da sua compra é: R$${totalCompra}`);
console.log(`A media da compra é: R$${media}`);