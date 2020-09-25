const output = document.getElementById("output");

function mostrarTabuada(){
 
    let msg ="";
    let num = parseFloat( prompt("Digite um número:"));
    let multi = parseFloat(prompt(`Até qual número será a multiplicação?`))

    for(let i = 0; i <= multi; i++){
        msg += (`${num} x ${i} =  ${num * i} <br>` );
    }
    output.innerHTML = msg;
}

function limparTabuada(){ 
    output.innerHTML = "";   
}
