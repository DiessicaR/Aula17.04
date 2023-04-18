/*Crie um programa que peça ao usuário para inserir o seu nome e sua cor favorita e imprima a mensagem:
"A cor favorita de FULANO é COR"
Fazer o exercício duas vezes, utilizando template strings e concatenação
*/

/*Exercicio 1
let nome = prompt("Digite seu nome:")
let cor = prompt("Digite sua cor favorita:")

//console.log("A cor favorita de " + nome + " é a cor " + cor + ".")

console.log(`A cor favorita de ${nome} é a cor ${cor}.`)
alert(`A cor favorita de ${nome} é ${cor}.`)
 */


/*Exercicio do uso da propriedade Length
let nome = "Diéssica da Cruz"
alert(nome.length)
*/

/*Exercicio do uso da função toLowerCase
const fraseDesmotivacional = "Não Há Nada Ruim Que Não Possa Piorar"
alert(fraseDesmotivacional.toLowerCase())

alert(fraseDesmotivacional + '\n' + fraseDesmotivacional.toLocaleUpperCase())
alert(fraseDesmotivacional + '\n' + fraseDesmotivacional.toLocaleLowerCase())
*/


/* Exercicio do uso do Trim
let texto = "!  Olá Marilene  !"
alert(texto.trim())
*/

/*Exercicio do uso do Includes

let frase = "Ontem meus pais me visitaram"
alert(frase.includes("me")
)
*/

/* Exercicio replaceAll(chars1,chars2)

const frase = "Deixa os garoto brincá"
const novaFrase = frase.replaceAll("os garoto","as guria")
alert(frase + '\n' + novaFrase)

*/




/*Peça para o usuário escrever uma frase e imprima no console a frase alterada, com: 
// Todas as letras maiúsculas
//Na língua do i (substituindo a vogal "o" por "i")
//O tamanho da frase

let frase = prompt("Manda uma frase aí")
//let tamanhoFrase = frase.length

//frase = frase.replaceAll("o"."i")
//frase = frase.toUpperCase 



console.log(frase.toLocaleUpperCase())
console.log(frase.replaceAll("o","i"))
console.log(frase.length)
alert(frase.replaceAll("o","i").toUpperCase() +  "// length " + frase.length)
//alert(frase +  'length ' + frase.length)
*/

//Crie um array com pelo menos 5 raças de cachorro

const listaDeRacas = ["poodle", "pastor alemão" , "Daschaund", "Boxer", "Corgie"]

//Peça para o usuário inserir um número de 0 a 4
let indice = parseInt(prompt("Digite um número de 0 a 4:"))

//Imprima no console a raça correspondente à posição escolhida pelo usuário 
alert(listaDeRacas[indice])















