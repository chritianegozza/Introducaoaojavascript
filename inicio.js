const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaSuspensa = document.querySelector('#listaSuspensa');


//Listener - sempre que o botao adicionar for clicado 
// adicionaa um item ou uma  tarefa na lista
botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
    caixaTexto.focus();
});


function adicionaTarefa(textoDaTarefa) {
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id','tarefa');
    elementoSPAN.textContent = textoDaTarefa;

  
    elementoLI.className = 'naoRealizada'
    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionaBotaoRemover());

      //Listener - sempre que um item for clickado pelo mouse
    //altera o marcador, a cor da fonte e risca o texto
    elementoSPAN.addEventListener('click', function() {
            if(this.id === 'tarefa') {
                if(this.parentNode.className === 'naoRealizada'){
                    this.parentNode.className = 'realizada'
                } else {
                    this.parentNode.className = 'naoRealizada'
                }
                
            }
    });

    //console.log(elementoLI);

    return elementoLI;

}


function adicionaBotaoRemover(){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✘';
    botaoRemover.className = 'remover';
    //console.log(listaTarefas);
   //Listener - sempre o botao remover for clicado pelo mouse
   //remove um item da lista
    botaoRemover.addEventListener('click', function() {
              listaTarefas.removeChild(this.parentNode);
              exibeOcultaListaSuspensa();
        }
    );


    return botaoRemover;
}



function exibeOcultaListaSuspensa(){
    const elementoSPAN = document.querySelector('#tarefa');
    if(elementoSPAN === null) {
        listaSuspensa.setAttribute('hidden','hidden');
    } else {
        listaSuspensa.removeAttribute('hidden');
    }
}

listaSuspensa.addEventListener('change', function(){
    if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = listaSuspensa.querySelectorAll('#tarefa');
        for(tarefa of vetorTarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if(listaSuspensa.selectedIndex === 3) {
        const vetorBotoes = listaSuspensa.querySelectorAll('.remover');
        for(botao of vetorBotoes) {
            botao.dispatchEvent(new Event('click'));
        }
    }
});