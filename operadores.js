//Operadores aritméticos

//+

let a = 6, b = 9;
let soma = a + b;

console.log(soma);

let nome = 'Carlos';
let bemVindo = 'Olá';

let mgs = bemVindo + nome; //concatenar

msg = 'Olá' + 'Carlos!' +  'Tudo bem?';

console.log(mgs);

//-

let resultado = 7 - 2;
console.log(resultado);

//* Multiplicação

resultado = 8 * 50;
console.log(resultado);

// divisão /

resultado = 12 / 4;
console.log(resultado);


// % resto da divisão

resultado = 21 % 4; 
console.log(resultado);
//console.log(21 % 4);

// **
console.log(21 ** 4);


// = atribuição

let cor = 10;
console.log(cor);



//*=
let num = 3;
 num *= 2;
 // num = num * 2; poderia usar assim
 console.log(num);


 //**=
 console.log(num **= 2);


 // /*
 // -=
 //+=

 console.log(num += 4);

//Operador relacionais 

//

//let a = 10;
//let b = 20;
console.log(a > 10);

//operador de igualdade

// == comparar se algo é igual ao outro 
//== Não considera o tipo

let nota1 = 5;
let nota2 = '5';
console.log(nota1 == nota2);


// === considera o tipo 

console.log(nota1 === nota2);

//operador de negação - not - ! 
let conectado = true;
console.log(!conectado);
console.log(conectado);


//Desigualdade !=, !==
//== igualdade
//=== igualdade estreita exatamente igual

/*let nota1 = 5;
let nota2 = '5' 

console.log(nota1 != nota2);
console.log(nota1 == nota2);
console.log(nota1 !== nota2);
console.log(nota1 === nota2);*/


//operadores logicos binarios 

/*let a = 2;
let b = 3;
let c = 5;
let d = 6;

console.log((a > b) && (c < b ));// && = and = e */

//operador incremental

// ++
let x = 10;
//let a = ++x;

console.log(a);
console.log(x);
console.log(++a);
console.log(a);


//operador de descremental

//--




const btn = document.getElementById('elem');

btn.addEventListener('click', () => window.scrollTo({
  top: 400,
  behavior: 'smooth',
}));




