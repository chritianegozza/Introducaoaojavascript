//Condicionais

/*let nota1 = 5;
let nota2 = 9;

   

function media(n1, n2) { 
    return (n1 + n2)/2;
}

let resultado = media(nota1, nota2);

if(nota1 ===0 || nota2 === 0){ //pelo menos 1 deve ser verdadeira
    console.log(`Desclassificado, pois pelo menos uma das notas é igual a 0.`);
} else {
    console.log(`Classificado, pois ambas as notas são iguais a 0.`);
}

if(nota1 > 7 && nota2 > 7){ //ambas deven ser verdadeiras
    console.log(`Você teve um excelente desempenho.`);
} else {
    console.log(`Você teve um desempenho razoável ou sastisfatório.`);
}
*/


//console.log(resultado);

//if - Se ....

/*if(resultado >= 6) {
    console.log(`Aprovado com média ${resultado}.`);
}*/


//if - Se ....else - senão

/*if(resultado >= 6) {
    console.log(`Aprovado com média ${resultado}.`);
} else {
    console.log(`Reprovado com média ${resultado}.`);
}*/

//fazer um alinhamento 



/*if(resultado >= 6) {
    console.log(`Aprovado com média ${resultado}.`);
} else if(resultado >=4){
    console.log(`Em recuperação com média ${resultado}.`);
} else {
    console.log(`Reprovado com média ${resultado}.`);
} */

//Outras declaração 

/*if(resultado >= 0){
    console.log(`Média ${resultado} > 0.`);
}
console.log('Aprendendo js');

if(resultado >= 6) {
    console.log(`Aprovado com média ${resultado}.`);
} else if(resultado >=4){
    console.log(`Em recuperação com média ${resultado}.`);
} else {
    console.log(`Reprovado com média ${resultado}.`);
} 
    console.log('logo apos os ifs e elses');
*/




//operador ternário condicional - 3 operandos

let nota1 = 6;
let nota2 = 9;

   

function media(n1, n2) { 
    return (n1 + n2)/2;
}

let resultado = media(nota1, nota2);

//let situacao = resultado >=6 ? 'Aprovado' : 'Reprovado';
//console.log(situacao);

//podemos usar esse 
/*if(resultado >=6){
    situacao = 'Aprovado';
} else {
    situacao = 'Reprovado';
}

console.log(situacao);
*/

//sequencia de operador ternario 
let situacao = (resultado >= 6) ? `Aprovado com média ${resultado}` :
               (resultado >= 4) ? `Em recuperação com média ${resultado}` :
                                  `Reprovado com média ${resultado}`;
        
console.log(situacao);    

//sequencia de if e else
if(resultado >=6){
    situacao =  `Aprovado com média ${resultado}`;
} else if(resultado >= 4) {
    situacao = `Em recuperação com média ${resultado}`;
} else{
    `Reprovado com média ${resultado}`;
}
//ambos mostra o mesmo resultado
console.log(situacao);


//switch

let opcao = 2;

/*switch (opcao){
    case 1: 
       console.log('Entrega do tipo econômica em até 10 dias úteis. '); 
       break;
    case 2:
        console.log('Entrega do tipo norma em até 03 dias úteis. '); 
        break;
    case 3:
        console.log('Entrega do tipo expressa em até 01 dias útil. '); 
        break;
    default:
        console.log('Opção de entrega inválida');        
}

console.log("Logo após a execução do Switch");*/


//outra forma de fazer o switch 

opcao = 'expressa';

switch (opcao){
    case 'economica': 
       console.log('Entrega do tipo econômica em até 10 dias úteis. '); 
       break;
    case 'normal':
        console.log('Entrega do tipo norma em até 03 dias úteis. '); 
        break;
    case 'expressa':
        console.log('Entrega do tipo expressa em até 01 dias útil. '); 
        break;
    default:
        console.log('Opção de entrega inválida');        
}

console.log("Logo após a execução do Switch");