//primeiro exemplo de promise
//na vida real vai ter diversas situações que você vai precisar colocar uma callback dentro da outra
//abaixo vamos ter um exemplo não tão legal
/*callback hell
setTimeout(() =>{
    console.log("Console numero 1");

    setTimeout(()=>{
        console.log('Console numero 2');

        setTimeout(()=>{
            console.log('Podemos simplificar essa situação com Promise');
        }, 2000);
    },2000);
}, 2000);
*/
//agora vamos usar promise
function esperarPor(tempo = 2000, texto = 'Executando promise'){
    //vamos instanciar uma nova promise
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(texto);
            resolve();//não esquece o resolve
        }, tempo);
    })
} 

//instanciando a função com varios logs diferentes
esperarPor(2000, 'console log 1')
.then(()=> esperarPor(2000, 'console log 2'))
.then(()=> esperarPor(2000, 'Com promise fica mais simples'));