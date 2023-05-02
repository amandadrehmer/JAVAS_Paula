
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// let age = Number(prompt("Digite a sua idade: "))

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// if (age > 18) {
//     console.log("Você pode dirigir! Uhuu!")
// } else {
//     console.log("Você não pode dirigir. :(")
// }

// ---------------------------------------------------------------------------------------------------

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let estudar = prompt("Em qual turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno.");
// if (estudar === 'M') {
//     console.log("Bom dia! :) ")
// } else if (estudar === 'V') {
//     console.log("Boa Tarde! :) ")
// } else if (estudar === 'N') {
//     console.log("Boa noite! :) ")
// }

// ---------------------------------------------------------------------------------------------------

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let estudar = prompt("Em qual turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno.");
// estudar = estudar.toUpperCase()

// switch (estudar) {
//     case 'M':
//         console.log("Bom dia!");
//         break;
//     case 'V':
//         console.log("Boa tarde!");
//         break;
//     case 'N':
//         console.log("Boa noite!");
//         break;
//     default:
//         break;
// }

// ---------------------------------------------------------------------------------------------------

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let film = prompt("Digite  o genêro do filme: ");
// film = film.toLowerCase();
// let preco = Number(prompt("Digite o preço do ingresso: "));

// if (film === "fantasia" && preco < 15) {
//     console.log("Bom filme! :)");
// } else {
//     console.log("Escolha outro filme... :(");
// }

// OU usando o operador ternário:

// let film = prompt("Digite  o genêro do filme: ");
// film = film.toLowerCase();
// let preco = Number(prompt("Digite o preço do ingresso: "));

// const verificar = film === "fantasia" && preco < 15 ?
//     console.log("Bom filme! :)") :
//     console.log("Escolha outro filme... :(");

// ---------------------------------------------------------------------------------------------------

// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// let film = prompt("Digite  o genêro do filme: ");
// film = film.toLowerCase();
// let preco = Number(prompt("Digite o preço do ingresso: "));
// let lanche = prompt("Qual lanche você irá comprar? ")

// if (film === "fantasia" && preco < 15) {
//     console.log(`Bom filme! Aproveite o seu/a sua ${lanche}. <3`);
// } else {
//     console.log("Escolha outro filme... :(");
// }

// OU usando o operador ternário:

// let film = prompt("Digite  o genêro do filme: ");
// film = film.toLowerCase();
// let preco = Number(prompt("Digite o preço do ingresso: "));
// let lanche = prompt("Qual lanche você irá comprar? ")

// const verificar = film === "fantasia" && preco < 15 ?
//     console.log(`Bom filme! Aproveite o/a seu/sua ${lanche}. <3`) :
//     console.log("Escolha outro filme... :(");