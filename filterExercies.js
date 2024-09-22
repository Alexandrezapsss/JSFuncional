//exercicios com filter em JS
//filter em js filtra elementos de uma lista e o transforma em uma nova lista de valores com base no criterio do filtro

//ex filtre somente os números pares de uma lista
const numeros = [0,5,8,4,7,6,14,18,29];

const numerosPares = numeros.filter(num => num % 2 == 0);

for(num = 0; num < numerosPares.length; num ++){
    console.log(numerosPares[num]);
}