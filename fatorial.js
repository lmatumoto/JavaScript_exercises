function gerarFatorial(){
    var numero = document.getElementById("numberid").value;

    var fatorial = 1;

    for(var contador = 1; contador <= numero; contador++){
        fatorial *= contador;
    };

    document.getElementById("resultado").innerText = "Resultado: " + 
    " O fatorial de " + numero + " é " + fatorial;
    
    }
    

