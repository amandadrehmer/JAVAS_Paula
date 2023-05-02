
// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

// const object1 = {
//     nome: "Amanda",
//     compras: ["Pão","Mantega","Moranga"]

// }

// function imprimir1(objeto) {
//     console.log(`Olá, ${objeto.nome}. Hoje seus itens prioritários na lista de compras são: ${objeto.compras[0]}, ${objeto.compras[1]} e ${objeto.compras[2]}`)
// }

// imprimir1(object1)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

// const newObject1 = {
//     ...object1,
//     compras: ["Batata", "Alface", "Abacaxi"]
// }

// imprimir1(newObject1)

// ---------------------------------------------------------------------------------------------------

// 2. Resolva os passos a seguir:
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
    
// const pessoa2A = {
//     nome: "Amanda",
//     idade: 17,
//     profissao: "Estudante"
// }

// const pessoa2a = {
//     nome: "Eduardo",
//     idade: 29,
//     profissao: "Engenheiro"
// }
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

// function imprimir2(objeto1, objeto2) {
//     const listaInformacoes = []
//     function addInformacoes(objeto) {
//         const { nome, idade, profissao } = objeto
//         listaInformacoes.push(nome, nome.length, idade, profissao, profissao.length);
//     }
  
//     addInformacoes(objeto1);
//     addInformacoes(objeto2);
  
//     return listaInformacoes;
// }

// const dados = imprimir2(pessoa2A, pessoa2a);
// console.log(dados);

// ---------------------------------------------------------------------------------------------------

// 3. Resolva os passos a seguir:
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// let carrinho = [];
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// const moranga = {
//     nome: "moranga",
//     disponibilidade: true
// };
  
// const abacaxi = {
//     nome: "abacaxi",
//     disponibilidade: true
// };
  
// const laranja = {
//     nome: "laranja",
//     disponibilidade: true
// };
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.
//     - 💡 Dica
//       Aqui você deve usar o método **push()**

// function receber(fruta){
//     carrinho.push(fruta)
// }

// receber(moranga);
// receber(abacaxi);
// receber(laranja);
        
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

// console.log(carrinho)

// ---------------------------------------------------------------------------------------------------

// 4. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

// function informacoes() {
//     let nome = prompt("Digite o seu nome: ");
//     let idade = Number(prompt("Digite a sua idade: "));
//     let profissao = prompt("Digite a sua profissao: ");

//     const objetoInformacoes = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     };

//     console.log(objetoInformacoes);
//     console.log(typeof objetoInformacoes);
// }

// informacoes()
