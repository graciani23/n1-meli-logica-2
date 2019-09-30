
/*1) Crie um programa para printar todos os números pares de 1 a 100.
    - Números pares são todos os números que dividos por 2 tem resto 0
        - Qual operador que retorna o resto da divisão ? Vamos usar ele! >>>>>

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}




2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou += >>>>>>

let r = require('readline-sync')
let qtde = parseInt(r.question('Informe quantas linhas terá a pirâmide: '))
let repete = '*'
for (i=0; i<=qtde; i++) {
    console.log(repete)
    repete += '*'
}


3) Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
- Aqui você pode usar while ou do/while para resolver >>>>>>


let r = require('readline-sync')
let res = ''
let nome = r.question('Informe seu nome: ')
console.log(`Olá, ${nome}!`)
while (res != 'tchau') {
    res = r.question('Se quiser sair digite tchau: ')
    console.log(res)
}
console.log(`${res}, ${nome}`)
*/



4) Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
A meta a ser atingida é de 500 passos.
- Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou no exercicio 3. >>>

let r = require('readline-sync')
let meta = 0
let passos = 0

for (meta=0; meta<=500; meta++) {
    let passos = parseInt(r.question('Informe a quantidade de passos desejada: '))
    meta += passos
    console.log(meta)
}
*/

/*

5) Crie um programa que receba 10 números digitados no cmd. Ordene esse números em ordem crescente usando o Bubble Sort, utilizando loops e printe na tela.
Exemplo:
Recebendo: [5, 350, 15, 36, 5000, 30, 90, 1, 88, 450]
Ordenando: [1, 5, 15, 30, 36, 88, 90, 350, 450, 5000]
>>>>>>

let r = require('readline-sync')
let recebe = []
let num = 0
for (i=0; i<5; i++) {
    num = parseInt(r.question(`Digite o ${i+1} numero: `))
    recebe.push(num)
}
console.log(`Recebido: ${recebe}`)
recebe.sort()
console.log(`Ordenado: ${recebe}`)*/

/*

6) Agora, crie um programa que receba 10 números digitados no cmd. Ordene esse números em ordem decrescente usando o Bubble Sort, utilizando loops e printe na tela.
Exemplo:
Recebendo: [5, 350, 15, 36, 5000, 30, 90, 1, 88, 450]
Ordenando: [5000, 450, 350, 90, 88, 36, 30, 15, 5, 1]

let r = require('readline-sync')
let recebe = []
let num = 0
for (i=0; i<5; i++) {
    num = parseInt(r.question(`Digite o ${i+1} numero: `))
    recebe.push(num)
}
console.log(`Recebido: ${recebe}`)
recebe.reverse()
console.log(`Ordenado: ${recebe}`)

*/