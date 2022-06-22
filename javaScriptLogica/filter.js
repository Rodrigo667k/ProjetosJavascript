// Filtre e retorne todos os números pares de um array.

function filtraPares(arr){
    return arr.filter(function (item){
            return item % 2 === 0;
        });
    }


function callback(item){
    return item %2 === 0;

} 

const meuArry = [1, 23, 55, 67, 30, 2, 4]