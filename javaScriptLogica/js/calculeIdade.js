// Calcular idade 

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos
    } anos idade`;
}
const pessoa1 = {
    nome: "maria ",
    idade: 30
}
const pessoa2 = {
    nome: "carla ",
    idade: 26,
}
const animal = {
    nome: "astro ",
    idade: 5,
    raca: "viralata",
}

console.log(calculaIdade.call(pessoa2, 30));

