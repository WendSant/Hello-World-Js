// alert("Hello World");

console.log("Olá Mundo");

var aulavar ; 

aulavar = "Teste" ;

console.log(aulavar);


//  \n Quebra linha na variavel ex: 

var quebraLinha = "Linha um \n Linha Dois";

console.log(quebraLinha);

/* 

    Boolean: True ou false ainda estudar sobre para fazer operações logicas
    Null: Literalmente vazio, deixar a variavel vazio
    Undefined: Quando não setamos o que é a variavel e o nosso sistema não sabe o que tem dentro
    Number: Literalmente numero kk
    String: Conjunto de caracteres se diz uma string aquilo que esta entre aspas duplas "String"

*/

/* 
    Operações aritmeticas
    Adição  +
    Subtração -
    Multiplicação *
    Divisão / 
    Módulo %
    Incremento ++
    Decremento --


*/

var OpArit = 5;
var OpArit2 = 6;

var OpAritRes = OpArit *= OpArit2;

console.log(OpAritRes);

OpAritRes /= 2;

console.log(OpAritRes);

OpAritRes %= 10

console.log(OpAritRes);





/* 
    Atribuições
    =   x = y   x = y
    +=  x += y  x = x + y 
    -=  x -= y  x = x - y
    *=  x *= y  x = x * y
    /=  x /= y  x = x / y
    %=  x %= y  x = y % y  

*/

/* 
    Operadores Comparativos 
    == Igual a 
    === Valor igual e igual
    ! = não é igual 
    !== não igual ou não igual
    > maior que
    < menor de
    >= Maior quer ou igual a
    <= menor que ou igual a 
*/

/* 
    Operadores logicos
    && e 
    || ou
    ! Negativo
*/

//  && Exemplo
var idade = 20;

var maior20 = idade >= 20;
var menor20 = idade <= 20;

var entre = maior20 && menor20;

console.log(entre);

console.log("Idade", idade);
console.log("Maior que vinte", maior20);
console.log("Menor que vinte", menor20);
console.log("Entre 20 e 30 anos", entre);

// || Exemplo

var idade2 = 9;

var menor10 = idade2 <= 10;
var maior65 = idade2 >= 65;
var gratuidade = menor10 || maior65;

console.log("Idade", idade2);
console.log("Maior que 65", maior65);
console.log("Menor que 10", menor10);
console.log("Tem direito a gratuidade", gratuidade);


// EXEMPLO NEGAÇÃO

var idade3 = 15;
var maiorVinte = idade3 >=20;
var menor20 = !maiorVinte

console.log("Idade", idade3);
console.log("Maior que vinte", maiorVinte);
console.log("Menor que vinte", menor20);

// Strings
console.log("aula \n strings");

var srt = 'Olá "aspas"teste';

console.log(srt);





// Calculadora de soma que fiz testando um negocio kkkkk
// var n1 = prompt("Digite o primeiro valor");
// var n3 = n1 * 1
// var n1 = prompt("Digite o segundo valor");
// var n4 = n1 * 1
// var n5 = n4 + n3
// alert(n5)





// TRANSFORMAR STRINGS EM NUMERO

var stringNumero = "89";
var stringNumero2 = "1";
var stringNumeroResult = parseFloat(stringNumero) + parseFloat(stringNumero2);
console.log(stringNumeroResult);


// Alert e prompt

// var mynome = prompt("Digite seu nome");

// alert("Seja bem vindo "+ mynome);