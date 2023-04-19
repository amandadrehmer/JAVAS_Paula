// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).

function informacoes(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`);
}

const usuario = prompt("Informe o seu nome: ");
const usuario1 = parseInt(prompt("Informe a sua idade: "));
const usuario2 = prompt("Informe o seu endereço: ");
const usuario3 = prompt("Informe a sua profissão: ");

informacoes(usuario, usuario1, usuario2, usuario3)

// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function numeros(num1, num2) {
    const soma = num1 + num2
    return soma
}

const number1 = parseInt(prompt("Digite um número: "));
const number2 = parseInt(prompt("Digite outro número: "));

console.log(numeros(number1, number2));

// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function TorF(n1, n2) {
    if (n1 > n2) {
        return `O número ${n1} é maior que o número ${n2}`
    }
    else if (n1 === n2) {
        return `O número ${n1} é igual ao número ${n2}`
    }
    else {
    }
};

const user = parseInt(prompt("Digite um valor: "));
const otheruser = parseInt(prompt("Digite outro valor: "));
console.log(TorF(user, otheruser));

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function par(nu1) {
    if (nu1 % 2 === 0) {
        console.log(`O número ${nu1} é par.`)
    }
    else {
        console.log(`O número ${nu1} não é par.`)
    }
}
const user2 = parseInt(prompt("Insira um número: "));
par(user2);

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function str(text) {
    console.log (text.length)
    console.log (text.toUpperCase())

}

const user3 = prompt("Escreva uma frase: ");
str(user3);

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

function somar(val1, val2) {
    const sum = val1 + val2
    return sum
}
function subtrair(val1, val2) {
    const subtrai = val1 - val2
    return subtrai
}
function multiplicar(val1, val2) {
    const multiplicacao = val1 * val2
    return multiplicacao
}
function dividir(val1, val2) {
    const divisao = val1 / val2
    return divisao
}

const anserws = parseInt(prompt("Informe um número: "))
const anserws2 = parseInt(prompt("Informe outro número: "))
console.log(somar(anserws, anserws2))
console.log(subtrair(anserws, anserws2))
console.log(multiplicar(anserws, anserws2))
console.log (dividir(anserws, anserws2))