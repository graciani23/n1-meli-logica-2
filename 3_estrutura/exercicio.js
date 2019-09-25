//resposta aqui
let r = require('readline-sync')

let lista = [
    {
        nome: 'Nescau',
        tempoDeValidade: 100,
        congelado: false
    },
    {
        nome: 'Nuggets',
        tempoDeValidade: 100,
        congelado: true
    },
    {
        nome: 'Pâo de queijo',
        tempoDeValidade: 100,
        congelado: true
    }
]
let posicao = parseInt(r.question('Escolha um produto entre 0 e 2: '))
let diasParaVenc = parseInt(r.question('Informe quantos dias faltam para o vencimento: (<=100)'))
let porcentagem = (diasParaVenc * 100) / lista[posicao].tempoDeValidade

 if (porcentagem <= 2) {
     console.log(`Descartar o produto ${lista[posicao].nome}, muito proximo de vencer`)
 } else if (lista[posicao].congelado == false && porcentagem <= 10) {
     console.log(`Desconto!  O produto ${lista[posicao].nome} não congelado e próximo da validade.`)
 } else if (lista[posicao].congelado == true && porcentagem <= 5) {
     console.log(`Desconto! O produto ${lista[posicao].nome} é congelado e próximo da validade.`)
 } else {
     console.log(` O produto ${lista[posicao].nome} está longe do vencimento.`)
 }

//
