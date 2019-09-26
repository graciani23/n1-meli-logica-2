/*
let x = 1;
switch(x) {
    case 1:
        console.log('Luma');
        break;
    case 2:
        console.log('Graciani');
        break;
    case 3:
        console.log('Silvia');
        break;
    default:
        console.log('Reprograma');
} */

/*
let r = require('readline-sync');
let oper = r.question('Infomar qual operacao sera realizada: [somar, subtrair, multiplicar ou dividir] ').toUpperCase()

let a = 10
let b = 5

if (oper == 'SOMAR') {
    console.log(a + b)
} else if (oper == 'SUBTRAIR') {
    console.log(a - b)
} else if (oper == 'DIVIDIR') {
    console.log(a / b)
} else if (oper == 'MULTIPLICAR') {
    console.log(a / b)
} else {
    console.log('Operação inválida!')
}
*/


let r = require('readline-sync');
let oper = r.question('Infomar qual operacao sera realizada: [ + / - / % / * ] ')
let n1 = parseFloat(r.question('Informe o primeiro número: '))
let n2 = parseFloat(r.question('Informe o segundo número: '))
function somar(n1, n2) {
    return n1 + n2;
}
function subtrair(n1, n2) {
    return n1 - n2;
}
function dividir(n1, n2) {
    return n1 / n2;
}
function multiplicar(n1, n2) {
    return n1 * n2;
}

switch (oper) {
    case '+':
        console.log(somar(n1, n2));
        break;
    case '-':
        console.log(subtrair(n1, n2))
        break;
    case '%':
        console.log(dividir(n1, n2))
        break;
    case '*':
        console.log(multiplicar(n1, n2))
        break;
    default:
        console.log('Opção inválida');
}

