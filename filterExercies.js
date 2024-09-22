//exercicios com filter em JS
//filter em js filtra elementos de uma lista e o transforma em uma nova lista de valores com base no criterio do filtro

//ex filtre somente os números pares de uma lista
const numeros = [0,5,8,4,7,6,14,18,29];

const numerosPares = numeros.filter(num => num % 2 == 0);

for(num = 0; num < numerosPares.length; num ++){
    console.log(numerosPares[num]);
}

//dado uma lista de plavras pegue para uma nova ista as palabras com menos de 5 caracteres
const palavras = ['bola', 'arvore', 'caminhão', 'carro', 'você', 'estado', 'bacia'];

const menosDe5Letras = palavras.filter(palavra => palavra.length <= 5);

console.log(menosDe5Letras);

//Dada uma lista de objetos representando pessoas, filtre apenas as pessoas com idade maior que 18.

const pessoas = [
    {nome : 'Alexandre', idade : 30},
    {nome : 'Beatriz', idade : 20},
    {nome : 'Edileuza', idade : 17},
    {nome : 'Laedio', idade : 16},
    {nome : 'Scooby', idade : 11}
];

const menoresDeIdade = pessoas.filter(pessoa => pessoa.idade < 18);
console.log(menoresDeIdade);