const output = document.getElementById("output");

function gerarJogo(){

let msg="";    

for(let i = 1; i <=7 ; i++){
    
    let aleatorio = (Math.floor(Math.random() * 10));    
    msg += (`Coluna ${i}: ${aleatorio} <br>`);   
    }
    output.innerHTML = msg;
    document.getElementById("mensagem").innerText = `    Boa Sorte!`
}

function limparTela(){
    output.innerHTML="";
}
