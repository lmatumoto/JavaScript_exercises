// Quiz 



let pontos = 0;
let total = 0;
let nome;


function fimDeJogo() {

    alert(`\t---- Fim de Jogo ---\n
${nome} você fez ${total} pontos. `)

    if (total == 3)
        alert(`Parabéns!`)
    else
        alert(`Mais sorte da próxima vez...`)
}



function bemVindo() {

    alert(`\t---- Quiz ----
Welcome to the Machine! \n`)
    nome = prompt(`Digite seu nome: \n`)
}

function pontuacao() {

    total = pontos;
    alert(`Total de pontos: ${total}\n`)
}

function senha() {

    do {
        let senha = prompt(`\nQual a resposta para tudo? `)
        if (senha == 42) {
            alert(`Correto`)
            ++pontos;
            pontuacao();
            break;
        }
        else {
            alert(`Incorreto. Digite novamente`)
            --pontos;
            pontuacao();
        }
    } while (senha !== 42)
}

function quiz1() {

    let sequencia;
    do {
        //alert(`2,7,13,20,28....`)
        sequencia = parseInt(prompt(`2,7,13,20,28....\n Digite o número seguinte: `))

        if (sequencia == 37) {
            alert(`Correto`)
            ++pontos;
            pontuacao();
            break;
        }
        else {
            alert(`Incorreto. Digite novamente`)
            --pontos;
            pontuacao();
        }
    } while (sequencia !== 37)
}

function quiz2() {
    
    let frase;
    let verifica = false;

    do {
        
        frase = parseInt(prompt((`Qual a principal frase do Sheldon, do The Big Bang Theory?\n 
1- Kamehameha\n 2- Bazinga\n 3- É hora de morfar\n 4- Alohomora
    Digite o número: `)))

        switch (frase) {
            case 1:
                alert(`Incorreto`)
                --pontos;
                pontuacao();
                break;
            case 2:
                alert(`Correto`)
                ++pontos;
                pontuacao();
                verifica = true;
                break;
            case 3:
                alert(`Incorreto`)
                --pontos;
                pontuacao();
                break;
            case 4:
                alert(`Incorreto`)
                --pontos;
                pontuacao();
                break;
            default:
                alert(`Digite um número entre 1 e 4\n`)
        }
    } while (verifica !== true)
}

bemVindo();
senha();
quiz1();
quiz2();
fimDeJogo();

