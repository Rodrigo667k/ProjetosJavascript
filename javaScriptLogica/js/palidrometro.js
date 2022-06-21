
//solução 1, ativeidade 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}


//solução 2, atividade 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente"

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string.length - 1 - i){
            return false;

        }
    }
    return true;
}

//arrey pares

function substituiPares(array){
    if(!array)return -1;
    if(!array.length) return -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] == 0){
            console.log("Voce ja é zero!!")
        }else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0..`)
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90]
substituiPares(arr)


