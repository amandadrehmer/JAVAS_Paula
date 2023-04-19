//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
// c) Imprima o array no console
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//e) Remova da lista o item de índice que o usuário escolheu.
    
//f) Imprima o array no console

const tarefas = []
const usuario1 = prompt("Escreva a primeira tarefa: ")
const usuario2 = prompt("Escreva a segunda tarefa: ")
const usuario3 = prompt("Escreva a terceria tarefa: ")

tarefas.push(usuario1, usuario2, usuario3)
console.log(tarefas)

const usuario4 = parseInt(prompt("Escreva o índice da tarefa que você já realizou: "))
if(usuario4 === 1){
    tarefas.splice(0,1);
} else if(usuario4 === 2){
    tarefas.splice(1,1);
} else if(usuario4 === 3){
    tarefas.splice(2,1)
}else{
    
}
console.log(tarefas)
