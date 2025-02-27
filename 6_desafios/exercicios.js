/*
Para praticar:
1 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa para printar todos os números pares de 1 a 100.
- Números pares são todos os números que dividos por 2 tem resto 0
- Qual operador que retorna o resto da divisão? Vamos usar ele!

let cont = 0
do {
    if (cont % 2 == 0)
    console.log(cont)
    cont++
} while (cont <= 100)




/*

2 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou +=

let cont = 0
let estrela = ''
let qtde = 10

for (let i=0; i<qtde; i++) {
    estrela += '*'
    console.log(estrela)
}

while (cont<qtde) {
    estrela += '*'
    console.log(estrela)
    cont++
}

/*
3- Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.

let r = require('readline-sync')
let nome = r.question(`Digite seu  nome: `)
console.log(`Olá, ${nome}!`)
let palavra = ''
while (palavra != 'Tchau') {
    palavra = r.question('Digite algum comando ou Tchau para sair: ')
    console.log(palavra)
}
console.log(`${palavra}, ${nome}`)




/*

4 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um  programa contador de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
A meta a ser atingida é de 500 passos.

let r = require('readline-sync')
let meta = 500;
let cont = 0

do {
    let passos = parseInt(r.question('Quantos passos você quer seguir? '))
    cont += passos
    console.log(`Você tem ${cont} passos.`)
} while(cont<= meta)


/*

5 - Crie um programa que conte de 10 até 1 de 1 em 1.

for (let i=10; i>=1; i--) {
    console.log(i)
}

/*

6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
    - Printe o maior;
    - Printe o menor.

--

let array = [5, 37, 18, 59, 12, -5]
let maior = ''
let menor = ''
for (let i = 0; i < array.length; i++) {
    if (array.length == 0) {
        maior = array[0]
        menor = array[0]
    } else if (array[i] > maior) {
        maior = array[i]
    } else if (array[i] < menor) {
        menor = array[i]
    }
}

console.log(maior)
console.log(menor)

/*
Desafios extras:

1 - Crie um programa que printe a frase "Olá eu sou a [seu nome aqui]".



let r = require('readline-sync')
let nome = r.question('Qual o seu nome? ')
console.log(`Olá, eu sou a ${nome}!`)
/*
2 - Crie um programa que irá converter o uma quantia de real para dolar utilizando a cotação do dia.

let qtdReal = 100
let cotacaoDolar = 4.3412
let qtdDolar = 0

qtdDolar = qtdReal / cotacaoDolar

console.log(`Com R$${qtdReal} é possível ter U$${qtdDolar.toFixed(2)}`)

/*


3 - Crie um programa que receba um valor e printe a mensagem:
    - “Dentro”, se estiver entre 3 e 5
    - “Fora” se estiver fora do intervalo 4 e 7.

let r = require('readline-sync')
let num = parseInt(r.question('Digite um número: '))
if (num >= 3 && num <= 5) {
    console.log('Dentro!')
} else {
    console.log('Fora!')
}

4 - Crie um programa que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado!
    - Se a nota for maior ou igual a 6, printar "Aprovado"
    - Se a nota for maior ou igual a 5, printar "Recuperação"
    - Se for menor que a nota de recuperação, printar "Reprovado"

let nota1 = 5
let nota2 = 3  
let media = (nota1 + nota2) / 2
let status = ''


if (media >= 6) {
    status = "Aprovado"
} else if (media >= 5) {
    status = "Recuperação"
} else {
    status = "Reprovado"
}
console.log(`A situação do aluno é: ${status}`)




5 - Crie um programa de urna eletrônica para receber o voto de sua heroína favorita.
Você deve iniciar o programa mostrando ao usuário qual as opções de voto ele tem, em seguida peça que ele escolha uma das opções:
    - Caso for 0 - voto nulo
    - Caso for 10 - voto Mulher Maravilha
    - Caso for 20 - voto Capitã Marvel
    - Caso não digitar nada, voto vai pra Silvia

let opcao = 10
switch (opcao) {
    case 0:
        console.log("voto nulo")
        break
    case 10:
        console.log("Mulher Maravilha")
        break
    case 20:
        console.log("Capitã Marvel")
        break
    default:
        console.log("Silvia")
}

*/
/*
6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e ordene esse array do menor para o maior (sem usar sort).
*/

let array = [5, 37, 18, 59, 12, -5]
function ordenaNum(n1, n2) {
    return n1 > n2 ? 1 : n1 < n2 ? -1 : 0;
}
array.sort(ordenaNum);
for (i=0; i<array.length; i++) {
    console.log(array[i])
}