//Tipo de dados de referecia

//função - function


//declaração da função sem parametro
/*function exibirMensagem(){
    alert('Olá, esssa mgs foi emitida a partir de uma função')
}

//chamada da funcao
exibirMensagem();*/

//função com parametro
/*function mostrarMensagem(primeiroNome, ultimoNome){
    alert(`Olá ${primeiroNome} ${ultimoNome}, tudo bem?`); //funcão dupla
}
mostrarMensagem('Ana', 'Santos'); //Argumento
mostrarMensagem('Pedro', 'Silva');*/



/*function mediaAritmeticaSimples(a,b) {
    let m = (a + b) / 2;
    return m;
}

mediaAritmeticaSimples(10, 5);


console.log(mediaAritmeticaSimples(10,5));*/


//reaproveitamento de codigo

function mediaAritmeticaSimples(a,b) {
    return (a + b) / 2;
}  

let resultado = mediaAritmeticaSimples(10, 5);

console.log(resultado);

resultado = mediaAritmeticaSimples(45, 92);

console.log(resultado);
