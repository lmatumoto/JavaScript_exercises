
/* Construir uma função para calcular média
Requisitos: 
Pode receber um ou mais parâmetros
Deve retornar um único número
Deve gerar um erro se receber um parâmetro diferente de número
Deve retornar 0 se não receber nenhum parâmetro*/

(function(){

    function calcularMedia(){
      let total = 0;
      let i = 0
      console.log(arguments)
      for(i; i < arguments.length; i++){
        if(typeof arguments[i] !== "number"){
            throw Error(`Somente números`)
        }  
        total += arguments[i];
      }
      return (total/i) || 0
    }
      let media = calcularMedia( )//digite aqui os números, separados por vírgula
      console.log(`Média: ${media}`)
  })()
  