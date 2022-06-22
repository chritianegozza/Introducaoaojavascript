//Escopo de variavies e constantes 
//escopo é limite, pode ser visualizado em todo aquirvo  


/*let x = 10;//variavel global ela pode ser acessado em qualquer local 

console.log(x);

function soma(a, b){
    let z = a + b;// z é uma variavel local, só pode ser visualizado no mesmo arquivo
    return z;
}

let a = 50;
console.log(z);
console.log(soma(4,23));*/





//Calcular velocidade

/*const gravidade = 9.8;//variavel global

console.log(gravidade);

function calculaVelocidadeQuedaLivre(tempo){
    const resultado = gravidade * tempo;
    return resultado;
}


console.log(calculaVelocidadeQuedaLivre(30));

const resultado = 0;
console.log(resultado)*/




///calcular km milha

function calcularKmMilha(){
    let Km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = Km * 1.609;
}

console.log(km);