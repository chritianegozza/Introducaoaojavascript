//Arrays - Arranjo - vetor

//let produtos = [];//vazio
let produtos = ['camisa', 'calça','blusa'];

console.log(produtos.length);


//arrays começa com o indice 0 

//let cidades = ['São Paulo','Santos', 'Cubatão', 'São Vicente'];
//console.log(cidades[cidades.length-2]);

//podemos subscrever os dados 
//cidades[1] = 'caxias'; e muda a cidade da 2 posição

//cidades[2] = 30; //podemos inserir diferente tipos de dados no arrays

//console.log(typeof cidades); //typeof devem aceitar vários tipos de dados sem especificar explicitamente o tipo

/*let jogadores = [
    {
        nome: 'Arthur',

        posição: 'Atacante'
    },
    {
        nome: 'Gil',
        posição: 'Zagueiro'
    },
];*/

//console.log(jogadores);


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

//push - adicionar no final do vetor

const cidades = [];

cidades.push('rio', 'campinas');
console.log(cidades);

cidades.push('rio grande do sul', 'cubatão');
console.log(cidades);




//Array.from

const x = Array.from('ABNT'); // irá separar as letras do arrys

console.log(x);


//includes
//const cidades = ['rio', 'foz', 'limeira']; 
//console.log(cidades.includes('foz'));//para encontrar a cidade no arryas
//console.log(cidades.includes('santos')); //elemento não consta no arrays então é falso



///Iterar ou percorrer
/*const jogadores = [
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

function obtemNomeJogadores(j){
    return j.nome;
}   

function obtemPosicaoJogadores(j){
    return j.posição;
}
    
    let nomesJogadores = jogadores.map(obtemNomeJogadores);
    let posicoesJogadores = jogadores.map(obtemPosicaoJogadores);
 
    console.log(nomesJogadores);
    console.log(posicoesJogadores);*/

//iterar

let notas = [7,9,2,5,4];
function adicionarUmPonto(nota){
    return nota + 1;
}

let notaAtualizadas = notas.map(adicionarUmPonto);

console.log(notaAtualizadas);

//filter

const jogadores = [
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

function obtemNomeJogadores(j){
    return j.nome;
}   

function obtemPosicaoJogadores(j){
    return j.posição;
}
    
    let nomesJogadores = jogadores.map(obtemNomeJogadores);
    let posicoesJogadores = jogadores.map(obtemPosicaoJogadores);
 
    console.log(nomesJogadores);
    console.log(posicoesJogadores);

    function obtemVolante(jogador) {
        return jogador.posicao === 'Volante';
    }

    const volantes = jogadores.filter(obtemVolante); //filtrar os jogadores na posição volante

    console.log(volantes);

    //foreach - para cada 

    function exibeNomeJogador(jogador) {  //irá mostrar o nome de cada jogador
        console.log(jogador.nome);
    
    }
       
    jogadores.forEach(exibeNomeJogador);