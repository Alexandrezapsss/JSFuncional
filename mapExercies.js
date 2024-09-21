//pegar uma lista de numeros e multiplicar eles por 2
//DICA MAP - Usar map para realizar a transformação de valores em uma lista

let numbers = [2,5,8,7,6];

let doubleNumbers = numbers.map(number => {return number * 2} );

console.log(doubleNumbers);

//converter todos os items da lista acima em string
let convertToString = numbers.map(number => number.toString());

console.log(convertToString);

//dado uma lista de objetos que represetam uma conta mostre seus valores

const account = [
    {name : 'Alexandre', lastName: 'Queiroz', rating : 'Hot'},
    {name : 'Laedio', lastName: 'Moreira', rating : 'Cold'},
    {name : 'Edileuza', lastName: 'Queiroz', rating : 'Hot'}
];

const showTheAccount = account.map(acc => `Nome: ${acc.name} - Sobrenome: ${acc.lastName} - Rating: ${acc.rating}`);

console.log(showTheAccount);

//dado uma lista de números calcula seu valor quadrado
const listaNumeros = [8,5,3,2,4];

const valoresAoQuadrado = listaNumeros.map(num => num * num);

console.log(valoresAoQuadrado);

//adiciona propriedades a lista de objetos adicione o ID
const accountSemId = [
    {name : 'Alexandre', lastName: 'Queiroz', rating : 'Hot'},
    {name : 'Laedio', lastName: 'Moreira', rating : 'Cold'},
    {name : 'Edileuza', lastName: 'Queiroz', rating : 'Hot'}
];

const accountComId = accountSemId.map((data, index) => ({...data, 'id' : index + 1}));

console.log(accountComId);

//exercicios dado o array de um carrinho de compra monte 2 maps um somento com os nomes
//e outro adicionando uma propriedade itemTotal que recebe a quantidade * valorUnitario
const carrinho = [
    {nomeProduto : 'Caneta', qtde : 3, valorUnitario : 7.99},
    {nomeProduto : 'Impressora', qtde : 1, valorUnitario : 7.99},
    {nomeProduto : 'Caderno', qtde : 4, valorUnitario : 7.99},
    {nomeProduto : 'Tesoura', qtde : 10, valorUnitario : 7.99}
];

const relacaoProdutoCarrinho = carrinho.map(item => `Nome Produto: ${item.nomeProduto}`);

const calculoTotalItem = carrinho.map((item, totalItem) =>({...item, 'totalItem' : item.valorUnitario * item.qtde}));

console.log(relacaoProdutoCarrinho);
console.log(calculoTotalItem);