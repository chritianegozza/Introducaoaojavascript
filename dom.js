// dom 

//const lista = document.querySelector('ul');
const lista = document.querySelector('#lista'); //pegar pelo id


const elementoLI = document.createElement('li');
elementoLI.textContent = 'Um novo item na lista';

lista.className = 'Novoponteiro'; //mudar o css pelo js

//lista.setAttribute('class', 'novoponteiro');// outra forma de mudar pelo  css pelo js


//lista.removeAttribute('class');// mas tem que ter a class no html 

//lista.appendChild(elementoLI);

//const filhosDaLista = lista.querySelectorAll('li');

/*for(filho of filhosDaLista){
    lista.removeChild(filho);
}*/



//lista.remove();



console.log(lista);