//Arrays - Arranjo - vetor

//let produtos = [];//vazio
let produtos = ['camisa', 'calça','blusa'];

console.log(produtos.length);


//arrays começa com o indice 0 

let cidades = ['São Paulo','Santos', 'Cubatão', 'São Vicente'];
console.log(cidades[cidades.length-2]);

//podemos subscrever os dados 
//cidades[1] = 'caxias'; e muda a cidade da 2 posição

cidades[2] = 30; //podemos inserir diferente tipos de dados no arrays

console.log(typeof cidades); //typeof devem aceitar vários tipos de dados sem especificar explicitamente o tipo

let jogadores = [
    {
        nome: 'Arthur',

        posição: 'Atacante'
    },
    {
        nome: 'Gil',
        posição: 'Zagueiro'
    },
];

console.log(jogadores);


//split - dividir

const email = 'fulando@gmail.com';
let emailArray = email.split('@');
console.log(emailArray[1]);

const palavrasChave = 'cinema, futebol, televisão, viagem, serie';
const hobbies = palavrasChave.split(',');

console.log(hobbies[1]); //coloco qual o numero eu quero e pego 
console.log(hobbies[hobbies.length-1]); 
const tiposHobbies = hobbies.toString();
console.log(typeof tiposHobbies); //vai mostar o tipo do vetor


//join (tem uma string toda juntas )