//Funçao Construtora
function Produto(nome, preco) {
    // this é necessário para atribuir ao objeto em sua criação
    this.nome = nome;
    this.preco = preco;
    
    // Podemos criar valores e atributos privados visíveis somente dentro da função
    let atributoPrivado = 'Privado para manipulação mas posso ser exibido dentro de uma função construída dentro do obj';
    let desconto = 0.15;

    this.showPrivateAttribute = () => console.log(atributoPrivado);

    this.precoTotal = () => this.preco * (1 - desconto);
}

// Instanciando objetos
const p1 = new Produto('TV', 2500);
console.log(p1.nome); // TV
console.log(p1.precoTotal()); // 2125

p1.showPrivateAttribute(); // Privado para manipulação mas posso ser exibido dentro de uma função construída dentro do obj
