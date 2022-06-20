//vai aparecer um pop up com a mensagem de alert 
//alert('Olá! Seja bem vindo!');
//será mostrado no corpo da imagem
//document.write('Essa é a nossa primeira video aula. ');

document.querySelector('#t1').textContent = 'Javascript - Indrodução';
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

//para dá um alert para vc inserir seu nome
/*const nome =  prompt('Qual é o seu nome?'); 
alert('Que bom ter vocÊ aqui{nome}! \n começar');*/


//apresenta uma mgs e esconde o form de login
/*function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome}! Seja bem-vindo!`);
    document.getElementById('formularioLogin').style.display = 'none';

}
*/

//mudar fundo da tela
function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}

