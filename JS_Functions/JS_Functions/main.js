// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

function calculaArea(base, height) {

    const area = (base * height) / 2;
    return area

}

const alturaInformada = parseInt(prompt("informe a base: "));
const larguraInformada = parseInt(prompt("informe a altura: "));

console.log(calculaArea(alturaInformada, larguraInformada));

// // 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

function sum(novo, velho) {

    const age = novo - velho
    return age

}

const presente = parseInt(prompt("informe o ano atual: "));
const passado = parseInt(prompt("informe o seu ano de nascimento: "));

console.log(sum(presente, passado));

// // 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

function calculaImc(altura, peso) {

    var imc = peso / (altura * altura);
    return imc;
};

const user3 = parseFloat(prompt("Informe a sua altura: "));
const user3a = parseFloat(prompt("Informe o seu peso: "));
console.log(calculaImc(user3, user3a));

// // 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

function same(str1, str2) {
    tamanho1 = str1.length
    tamanho2 = str2.length
    if (tamanho1 == tamanho2) {
        return true
    } else {
        return false
    }
};

const user4 = prompt("Digite algo: ");
const user4a = prompt("Digite algo novamente: ");
console.log(same(user4, user4a));

// // 5. Escreva uma função que recebe um array e retorna o último elemento.

function find(elementos) {
    const last = elementos.slice(-1)[0]
    return last
};

const user5 = prompt("Escreva números dividios por uma barra e espaço '/ ': ").split('/ ');
console.log(find(user5));

// // 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

function validation(string1, string2) {
    const regex = new RegExp(string1, "gi");
    const comparison = regex.test(string2) 
    if (comparison) {
        return true
    } else {
        return false
    }
};

const user6 = prompt("Digite algo: ");
const user6a = prompt("Digite algo novamente: ");
console.log(validation(user6, user6a));

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

function rule(newyear, bornyear, cardyear) {
    idade = newyear - bornyear
    emissao = newyear - cardyear
    if (idade <= 20 && emissao >= 5) {
        return true
    } else if (idade <= 20 && emissao < 5) {
        return false
    } else if (idade > 20 &&  idade <= 50 && emissao >= 10) {
        return true
    } else if (idade > 20 && idade <= 50 && emissao < 10) {
        return false
    } else if (idade > 50 && emissao >= 15) {
        return true
    } else if (idade > 50 && emissao < 15) {
        return false
    }
};

const user7 = parseInt(prompt("Informe o ano atual: "));
const user7a = parseInt(prompt("Informe o seu ano de nascimento: "));
const user7b = parseInt(prompt("Informe o ano que foi emitido sua carteira: "));
console.log(rule(user7, user7a, user7b));
