const calcular = document.getElementById('calcular')

function imc(){
    
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso= document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome != '' && altura != '' && peso !=''){
       
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if(valorIMC <18.5){
            classificacao = 'abaixo do peso.'
        }else if(valorIMC <25){ 
            classificacao = 'com peso ideal. Está otimo (;'
        }else if(valorIMC <30){
            classificacao = 'levemente acima do peso.'
        } else if(valorIMC < 35){
            classificacao = 'com obsidade grau 1'
        }else if(valorIMC <40){
            classificacao = 'com obsidade grau 2'
        }else{
            classificacao = 'com obsidade grau 3. Cuidado,mude seus habitos!!!'
        }
            
        console.log('resultado',classificacao)
        alert(resultado)
        resultado.style.color = 'red'

     }else{
        
        alert(' Preencha todos os campos!!!!') 
      
    }

}
calcular.addEventListener("click",imc) //para prestar atenção quando alguem clicar

