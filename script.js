// alert("Hello World");

var separacao = "======================================"
console.log(separacao)

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
console.log(separacao)
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



console.log(separacao)

/* 
    Atribuições
    =   x = y   x = y
    +=  x += y  x = x + y 
    -=  x -= y  x = x - y
    *=  x *= y  x = x * y
    /=  x /= y  x = x / y
    %=  x %= y  x = y % y  

*/
console.log(separacao)
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
console.log(separacao)
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
console.log(separacao)
// || Exemplo

var idade2 = 9;

var menor10 = idade2 <= 10;
var maior65 = idade2 >= 65;
var gratuidade = menor10 || maior65;

console.log("Idade", idade2);
console.log("Maior que 65", maior65);
console.log("Menor que 10", menor10);
console.log("Tem direito a gratuidade", gratuidade);

console.log(separacao)
// EXEMPLO NEGAÇÃO

var idade3 = 15;
var maiorVinte = idade3 >=20;
var menor20 = !maiorVinte

console.log("Idade", idade3);
console.log("Maior que vinte", maiorVinte);
console.log("Menor que vinte", menor20);
console.log(separacao)
// Strings
console.log("aula \n strings");

var srt = 'Olá "aspas"teste';

console.log(srt);
console.log(separacao)




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

console.log(separacao)
// Alert e prompt

// var mynome = prompt("Digite seu nome");

// alert("Seja bem vindo "+ mynome);

// Condicionais IF ELSE

var idadeExemplo = 77;

if (idadeExemplo >= 18 && idadeExemplo <= 70) {
        console.log("Pode"); 
        console.log("Qual seu pedido?");

}
else {
    console.log("Não pode entrar");
    console.log("Volte quando tiver idade suficiente");
}
console.log(separacao)
// ====================================================================

// Tentantiva de fazer um programa que fala a média do enem

// var nomeUsuario = prompt("Olá, poderia me informar seu nome?");
// alert("Bem vindo "+ nomeUsuario +" aqui irei dizer sua media geral no ENEM");
// var linguagens = parseFloat(prompt("Poderia me informar sua nota em Linguagens, códigos e suas tecnologias"));
// var cienciasHum = parseFloat(prompt("Poderia me informar sua nota em Ciências Humanas e suas tecnologias"));
// var cienciasNat = parseFloat(prompt("Poderia me informar sua nota em Ciências da Natureza e suas tecnologias"));
// var matematica = parseFloat(prompt("Poderia me informar sua nota em Matemática e suas tecnologias"));
// var redacao = parseFloat(prompt("Poderia me informar sua nota na Redação"));

// var mediaGeral = (linguagens + cienciasHum + cienciasNat + matematica + redacao)/5;

// alert("Sua média geral no Enem é "+ mediaGeral);


// =======================================================================================================================

// Operador ternario
console.log(separacao)
var idadeTernario = 17;

idadeTernario >= 18 ? console.log("Pode") : console.log("Não pode");
console.log(separacao)
// Outro exemplo 
console.log(separacao)
var idadeTernario1 = 17 ;

var pode = idadeTernario1 >= 18 ? true : false;

console.log(pode);

// Condicionais Switch

    var nota1 = 8.0;
    var nota2 = 15;
     var mediaStwitch = (nota1+nota2)/2;
    var conceito = ""

    if (mediaStwitch >= 8 ) {
        conceito = "Ótimo";
    }
    else if (mediaStwitch >= 6.5) {
        conceito = "Bom";
    }
    else {
        conceito = "Regular";
    }

console.log("Sua média é "+ mediaStwitch);
console.log(conceito);

switch (conceito) {

    case "Ótimo": 
            console.log("Parabéns você foi um ótimo aluno");
            break;
    case "Bom":
            console.log("Você foi bem mas pode se esforçar mais um pouco");
            break;
    case "Regular":
            console.log("Você precisa estudar mais um pouco"); 
            break;
    default:
        console.log("Houve um erro!");
        break;
}
console.log(separacao);
//  Repetição for
console.log("Aula For");

var numeroFor = 5;

for (var i = 0; i < numeroFor; i++) {
    console.log("Executando o for pela "+i+" vez");

}


console.log("Terminado!");
console.log(separacao);
// Repetição while

var numeroWhile = 5;

while (numeroWhile <10) {
    console.log("Número "+numeroWhile)
    numeroWhile++;
}

console.log("Terminado");
console.log(separacao);
// Outro exemplo while usando math.random
//  Coloquei para apenas números inteiros pra ficar no hype 😎
var numeroWhile2 = parseInt(Math.random() * 100);

while (numeroWhile2 < 90) {
    console.log(numeroWhile2);
    numeroWhile2 = parseInt(Math.random() * 100);
}
console.log(numeroWhile2);
console.log("Terminado");
console.log(separacao);

// Arrays dos crias 🤣
console.log("Aula Arrays");

 var alunos = new Array("Wendson", "José", "Marta", "Mariana");
 console.log(alunos);

//  Outro exemplo Array

var alunos2 = ["Marcelo", "Pedro", "Marcos", "Daniel"];


// Olha cabeça de lampada, o in é o index no for ele pega o index 
// Já o of pega o valor do index ta ligado no exemplo ai por exemplo ele pega o nome do aluno, quando eu coloco o in eu tenho que dizer dentro do for q ele tem q dizer o nome do aluno. Ta vendo ali que eu coloquei alunos[aluno] é pra dizer que é a variavel alunos e pra for o repetir todos os arrays dentro q no caso são os nomes ta ligado é meio confuso mas da pra entender mais ou menos
// Exemplos com in e of no for
console.log("COM IN NO FOR")
for (var aluno in alunos2){
    console.log(alunos[aluno]);

}
console.log("COM OF NO FOR");
for (var aluno of alunos2){
    console.log(aluno);
}
console.log(separacao);

// Aula funções = functions
console.log("Aula Function");

// Primeiro exemplo cria pega visão que o bagulho da ficando dificil

function media() {
    var nota1Function = 10;
    var nota2Function = 9;
    var mediaFunction = (nota1Function + nota2Function)/2;
    console.log(mediaFunction); 
}

media();

// Segundo exemplo ai setando argumentos dentros dos parenteses 

function media2(n1,n2) {
    var nota1Function2 = n1;
    var nota2Function2 = n2;
    var mediaFunction2 = (nota1Function2 + nota2Function2)/2;
    // console.log(mediaFunction2);
    return mediaFunction2;
    
}

var resultado1Function = media2(5, 8);
var resultado2Function = media2(8, 8);

console.log(resultado1Function);
console.log(resultado2Function);