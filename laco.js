//Laços de repetição loops

//for

/*const listaNumeros = [23,45,76,12,89];

for(let i= 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
}
*/
//console.log(listaNumeros[0])
//console.log(listaNumeros[1])
//console.log(listaNumeros[2])
//console.log(listaNumeros[3])
//console.log(listaNumeros[4])
//ele imprimi 5 vezes 

/*const operacoes = ['soma','subtração','multiplicação', 'divisão'];

function montaTextoDaLista(){
    let textoDaLista = '';
    for(let i= 0; i < operacoes.length; i++){
        textoDaLista += '<li>' + operacoes[i] + '</li>';
    }
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();*/

//<li>soma</li>
//excecuta a proxima lista e vai indo até passar em todo laço 


//outra forma de fazer esse laços

/*const operacoes = ['soma','subtração','multiplicação', 'divisão'];

function montaTextoDaLista() { 
    let textoDaLista = '';
    for(let operacao of operacoes){
        textoDaLista += '<li>' + operacao + '</li>';
    }
    console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();


//podemos fazer com o arryas de jogadores

let jogadores = [
    {
        nome: 'Arthur',
        posição: 'Atacante'
    },
    {
        nome: 'Julio',
        posição: 'Zagueiro'
    },
    {
        nome: 'Milton',
        posição: 'Volante'
    },
    {
        nome: 'Alex',
        posição: 'Volante'
    },
];

for(let jogador of jogadores) {
    console.log(jogador.nome);
}
*/


//while - enquanto 

/*const operacoes = ['soma','subtração','multiplicação', 'divisão'];

let i=0;
while(i < operacoes.length){
    console.log(operacoes[i]);
    i++;
}
*/



//do while

/*const operacoes = ['soma','subtração','multiplicação', 'divisão'];

let i=0;
while(i < operacoes.length){
    console.log(operacoes[i]);
    i++;
}

let j=0;
do{
    alert('Olá, tudo bem');
    j++;
}while(j < operacoes.length);*/


//Outra forma de usar o laço de repetição

const operacoes = ['soma','subtração','multiplicação', 'divisão'];

let i=0;
while(i < operacoes.length){
    console.log(operacoes[i]);
    i++;
}

let j=0;
do{
    console.log(`${j} - ${operacoes[j]}`);
    j++;
}while(j < operacoes.length);
