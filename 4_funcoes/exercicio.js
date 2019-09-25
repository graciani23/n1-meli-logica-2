
let r = require('readline-sync');
let expr = r.question('Infomar qual operacao sera realizada: [somar, subtrair, dividir, multiplicar] ')
let a = parseFloat(r.question('Informe o primeiro valor: '))
let b = parseFloat(r.question('Informe o segundo valor: '))

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a /b;
}

function multiplicar(a, b) {
    return a * b;
}

switch (expr) {
    case 'somar':
        console.log(`A soma entre ${a} e ${b} é ${somar(a, b)}`);
        break;
    case 'subtrair':
        console.log(`A subtração entre ${a} e ${b} é ${subtrair(a, b)}`);
        break;
    case 'dividir':
        console.log(`A divisão entre ${a} e ${b} é ${dividir(a, b)}`);
        break;
    case 'multiplicar':
        console.log(`A multiplicação entre ${a} e ${b} é ${multiplicar(a, b)}`);
        break;
    default:
        console.log('Operação inválida!');
}