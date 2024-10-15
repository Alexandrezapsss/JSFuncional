class Produto {

    //fazer um construtor
    constructor(nome, preco, desc){
        this._nome = nome;
        this._preco = preco;
        this._desc = desc;
    }

    //podemos usar o set para caso seja atribuido um novo ele nao seja menor que 0
    set preco(novoValor){
        if(novoValor >= 0){
            this._preco = novoValor;
        }
    }
    get precoFinal(){
        return this._preco * (1 - this._desc);
    }

    //transformar atributos de um objeto em gets para manipula eles
    get nome(){
        return `Produto: ${this._nome}`;
    }

    //posso usar set para definir novas caracteristicas as propriedades
    set nome(novoNome){
        this._nome = novoNome.toUpperCase();
    }

}
const caneta = new Produto('Caneta', 5, 0.2);
console.log(caneta.nome);
caneta.preco = 18;
console.log(caneta.precoFinal);

class Pessoa{
    constructor(firstName, lastName, idade){
        this._firstName = firstName;
        this._lastName = lastName;
        this._idade = idade;
    }

    //get nome Completo
    get nomeCompleto(){
        return `${this._firstName} ${this._lastName}`;
    }

    //toda vez que minha propriedade é alterada SET
    set idade(idadecompleta){
        this._idade = idadecompleta
    }

    get idade(){
        return `Sua idade é: ${this._idade}`;
    }
}

const pessoa1 = new Pessoa('Alexandre','Silva', 30);

console.log(pessoa1.nomeCompleto);
pessoa1.idade = 31;
console.log(pessoa1.idade);