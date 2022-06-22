//Tipo de dado de referencia
//Objeto - object

/*let titulo = 'Introdução ao Javascript';
let numPag = 500;

const livro = {
    titulo: 'Introdução ao Javascript',
    numPag: 500
};

livro.titulo = 'Javascript Avançado';
console.log(livro);

livro.numPag = 800;
console.log(livro.numPag);

livro.editora = 'Super Nova';

console.log(livro)
*/

const pessoa = {
    primeiroNome : 'Ana',
    ultimoNome : ' Silvia',
    endereco: {
        rua: 'Fernando Costa',
        num: 55
    },
    nomeCompleto : function(){
        return this.primeiroNome + ' ' + this.ultimoNome;
    }

};

/*function soma() {

}
*/
pessoa.celular = '9981777077'
pessoa.enderecoCompleto = function(){
    return `Rua: ${this.endereco.rua}, ${this.endereco.num}.`;

}

//console.log(pessoa.enderecoCompleto());

//console.log(typeof pessoa.nomeCompleto());

function exibeDadosPessoa(p){
    //podemo usar também console.log
    alert(`\n
    Nome: ${p.nomeCompleto()}\n
    Endereço: ${p.enderecoCompleto()}\n
    Celular: ${p.celular}
    
    `);
}

exibeDadosPessoa(pessoa);