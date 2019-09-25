//resposta aqui

//resposta aqui

let r = require('readline-sync')
let lista = [
    { produto: 'maçã', preco: 4 },
    { produto: 'laranja', preco: 5 },
    { produto: 'arroz', preco: 10.5 }
]
let posicao = parseInt(r.question('Escolha um produto entre 0 e 2: '))
let desconto = parseFloat(r.question('Digite o percentual de desconto entre 0 e 50.10: '))
let prodSelecionado = lista[posicao]
let desc = (100 - desconto) / 100
let tot = (prodSelecionado.preco * desc).toFixed(2)


console.log(`O produto ${lista[posicao].produto} com ${desconto}% de desconto é R$${tot}`)