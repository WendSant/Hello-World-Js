// alert("Hello World");

var separacao = "======================================";
console.log(separacao);

console.log("Olá Mundo");

var aulavar;

aulavar = "Teste";

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
console.log(separacao);
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

var OpAritRes = (OpArit *= OpArit2);

console.log(OpAritRes);

OpAritRes /= 2;

console.log(OpAritRes);

OpAritRes %= 10;

console.log(OpAritRes);

console.log(separacao);

/* 
    Atribuições
    =   x = y   x = y
    +=  x += y  x = x + y 
    -=  x -= y  x = x - y
    *=  x *= y  x = x * y
    /=  x /= y  x = x / y
    %=  x %= y  x = y % y  

*/
console.log(separacao);
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
console.log(separacao);
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
console.log(separacao);
// || Exemplo

var idade2 = 9;

var menor10 = idade2 <= 10;
var maior65 = idade2 >= 65;
var gratuidade = menor10 || maior65;

console.log("Idade", idade2);
console.log("Maior que 65", maior65);
console.log("Menor que 10", menor10);
console.log("Tem direito a gratuidade", gratuidade);

console.log(separacao);
// EXEMPLO NEGAÇÃO

var idade3 = 15;
var maiorVinte = idade3 >= 20;
var menor20 = !maiorVinte;

console.log("Idade", idade3);
console.log("Maior que vinte", maiorVinte);
console.log("Menor que vinte", menor20);
console.log(separacao);
// Strings
console.log("aula \n strings");

var srt = 'Olá "aspas"teste';

console.log(srt);
console.log(separacao);

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

console.log(separacao);
// Alert e prompt

// var mynome = prompt("Digite seu nome");

// alert("Seja bem vindo "+ mynome);

// Condicionais IF ELSE

var idadeExemplo = 77;

if (idadeExemplo >= 18 && idadeExemplo <= 70) {
  console.log("Pode");
  console.log("Qual seu pedido?");
} else {
  console.log("Não pode entrar");
  console.log("Volte quando tiver idade suficiente");
}
console.log(separacao);
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
console.log(separacao);
var idadeTernario = 17;

idadeTernario >= 18 ? console.log("Pode") : console.log("Não pode");
console.log(separacao);
// Outro exemplo
console.log(separacao);
var idadeTernario1 = 17;

var pode = idadeTernario1 >= 18 ? true : false;

console.log(pode);

// Condicionais Switch

var nota1 = 8.0;
var nota2 = 15;
var mediaStwitch = (nota1 + nota2) / 2;
var conceito = "";

if (mediaStwitch >= 8) {
  conceito = "Ótimo";
} else if (mediaStwitch >= 6.5) {
  conceito = "Bom";
} else {
  conceito = "Regular";
}

console.log("Sua média é " + mediaStwitch);
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
  console.log("Executando o for pela " + i + " vez");
}

console.log("Terminado!");
console.log(separacao);
// Repetição while

var numeroWhile = 5;

while (numeroWhile < 10) {
  console.log("Número " + numeroWhile);
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
console.log("COM IN NO FOR");
for (var aluno in alunos2) {
  console.log(alunos[aluno]);
}
console.log("COM OF NO FOR");
for (var aluno of alunos2) {
  console.log(aluno);
}
console.log(separacao);

// Aula funções = functions
console.log("Aula Function");

// Primeiro exemplo cria pega visão que o bagulho da ficando dificil

function media() {
  var nota1Function = 10;
  var nota2Function = 9;
  var mediaFunction = (nota1Function + nota2Function) / 2;
  console.log(mediaFunction);
}

media();

// Segundo exemplo ai setando argumentos dentros dos parenteses

function media2(n1, n2) {
  var nota1Function2 = n1;
  var nota2Function2 = n2;
  var mediaFunction2 = (nota1Function2 + nota2Function2) / 2;
  // console.log(mediaFunction2);
  return mediaFunction2;
}

var resultado1Function = media2(5, 8);
var resultado2Function = media2(8, 8);

console.log(resultado1Function);
console.log(resultado2Function);
console.log(separacao);
// Aula agora cabeça de lampada parte 2 de functions
console.log("Aula 2 de functions");

function saudacao() {
  return "Olá mundo";
}

var s = saudacao();
console.log(s);
//  Outro exemplo de média nesta caarlho 🤗

// Usei o m no lugar do n
function media3(m1, m2) {
  var nota1Function3 = m1;
  var nota2Function3 = m2;
  var mediaFunction3 = (m1 + m2) / 2;
  return mediaFunction3;
}

var resultadofunction3 = media3(8, 7);
var m = media3;
var resultado2function3 = m(5, 5);

console.log(resultadofunction3);
console.log(resultado2function3);

// CARA PUTA Q PARIU MAIS UM EXEMPLO DE FUNCTION COM MÉDIA
console.log("Deus me ajuda");

var media4 = function (n1, n2) {
  return (n1 + n2) / 2;
};

var m2 = media4(5, 6);

console.log(m2);
console.log(separacao);

// Voltando aos estudos rapaziada, um mês paradão 😁 tomei no toba mai bora

var nomes = ["Wendson", "Marcos", "Daniel"];
var notas1 = [7.0, 6.5, 9.5];
var notas2 = [5.0, 7.0, 8.0];

function mediaa(n1, n2) {
  return (n1 + n2) / 2;
}

function passou(media) {
  if (media > 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

for (var index in nomes) {
  var notaa1 = notas1[index];
  var notaa2 = notas2[index];
  var m = mediaa(notaa1, notaa2);

  console.log(
    "Nomes: " +
      nomes[index] +
      " - Notas: " +
      notaa1 +
      " - " +
      notaa2 +
      " - Média: " +
      m +
      " - Situação: " +
      passou(m)
  );
}

// Objetos no js porra, ouvi um amém? 😁😎😋😋😎😋fé tropa
console.log(separacao);
console.log("Aula de objetos no js");

var objeto = { nome: "Wendson", notas: [7, 8] };

console.log(objeto.notas[0]);
console.log(objeto["notas"][1]);

var novaProp = "LastName";

// formas de adicionar propriedades no objeto
objeto.matricula = 585478;

objeto[novaProp] = "Alves";
objeto["sobrenome"] = "Santana";

console.log(objeto);

// Outra forma de criar objeto
console.log("Criando oto objeto");
var objeto2 = new Object();

objeto2.nome = "Marcos";
objeto2.matricula = "89745";

console.log(objeto2);
console.log(separacao);

// Continuação aula de objetos
// Metodos

var alunoMetodo = {
  nome: "Wendson",
  notasm: [9, 8],
  // THIS SÓ FUNCIONA NA PROPRIEDADE DO OBJETO RAPAZIADA
  mediametodo: function (n1, n2) {
    return (this.notasm[0] + this.notasm[1]) / 2;
  },
};

// Usando function pra inserida no metodo do objeto
function calcMedia(n1, n2) {
  return (n1 * 2 + n2) / 3;
}

var alunoMetodo2 = {
  nome: "Brenno",
  notasm: [9, 7],

  mediametodo: calcMedia,
};

console.log(alunoMetodo.nome);
console.log(
  alunoMetodo.mediametodo(alunoMetodo.notasm[0], alunoMetodo.notasm[1])
);

console.log(alunoMetodo2.nome);
console.log(
  alunoMetodo2.mediametodo(alunoMetodo2.notasm[0], alunoMetodo2.notasm[1])
);

console.log(separacao);
// Objetos Construtores, sera q agora consigo manter esse pc por mais dias?

// function criarAluno(nome, n1, n2) {

//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         mediaAluno: function () {
//                 return (this.nota1 + this.nota2 )/ 2;
//         }
//     }

// }

function aluno3(nome, n1, n2) {
  this.name = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function mediaAluno() {
    return (this.nota1 + this.nota2) / 2;
  };
}

var a = new aluno3("Wendson", 9, 8);
console.log(a.media());

// var turma = [
//     criarAluno("Wendson", 8, 6),
//     criarAluno("Gustavo", 7, 5),
//     criarAluno("Daniel", 7, 7)

// ]

// var aluno2 = turma[2];

// for (var aluno2  of turma) {
//     console.log(aluno2.nome + " - "+ aluno2.mediaAluno());
//

console.log(separacao);

// Aula de Datas

// Formas de instanciar uma Data:

// var d = new Date();
// var d = new Date(milliseconds);
// var d = new Date(dateString);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

var d = new Date();

console.log(d);

var d2 = new Date(49855649877845);

// Lembra de quando executar algum metodo usar o () pq é um metodo e precisa ser ativado é nós cria do futuro 😎
var meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jnh",
  "Jlh",
  "Ago",
  "Sep",
  "Out",
  "Nov",
  "Dec",
];

// var horas = prompt("Digite a hora");

// console.log(d2.setHours(horas));
console.log(d2);
console.log(meses[d2.getMonth()]);

console.log(separacao);

// Const, let e var as diferenças ae pae chama no desquedale 😅

var numero1 = 1;

let numero2 = 2;

// CONST ELA NÃO PODE SER REATRIBUIDA MAS O VALOR AS VEZES PODE MUDAR UTILIZANDO ARRAY CRIA CARAI
const numero3 = 3;

// let e const se criados em um bloco só existe dentro do bloco ta ligado?
// var é global ou seja mesmo criado dentro de um bloco é acessivel de vora cria
console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero2);
console.log(separacao);
// Window
// Tem varias propriedades, um exeplo disso é o alert e o console.log exemplo abaixo

window.console.log("Exemplo");
// window.alert("Mensagem comentada");
console.log(separacao);
// Document

// Mostra o html no console (?)
console.log(window.document);
console.log(document);

// DOM (documentpt2)

// da pra mostrar os objetos dentro do document
console.log(document.body);
console.log(document.body.innerHTML);
console.log(separacao);

// Acessando elementos js
// Primeira maneira

let p1 = document.getElementById("p1");
console.log(p1);

// Ota maneira

let paragrafos = document.getElementsByClassName("paragrafos");
console.log(paragrafos);

// ota

let todosTitulos = document.getElementsByTagName("h1");
console.log(todosTitulos);
console.log(todosTitulos[0]);
console.log(todosTitulos[1]);

// Modificando elementos no js

let p = document.getElementById("p1");
// innerHTMl coloca tag HTML
p.innerHTML = "Novo valor";
// innerText mostra só o texto que ta aparecendo na tela
p.innerText = "Outro novo valor";
// TextContent mostra tudo que ta dentro do html no caso da tag P
p.textContent = "Outro mais novo";
//  classname muda a classe do elemento
// p.className = "";
// Isto setaria como 'none' a classe

// Setando um atributo
let meuAtt = p.getAttribute("meuAtt");
console.log(meuAtt);
// mudando esse atributo
p.setAttribute("meuAtt", "Otoname");
// Não serve apenas para mudar o atributo mas como tbm para criar 👌🐱‍🏍
// Mudando style dele no js:
console.log(p.style);
// Só colocar p.style.atributo desejado

// AULA 1 DOM DOCUMENT OBJECT MODEL 

{
  function changeH2(inputcria) {
    let h2 = document.getElementsByTagName("h2")[0]
    h2.innerText = inputcria.value;
  }
}

{
  function hideh2(){
    let h2 = document.getElementsByTagName("h2")[0]
    if(h2.style.display == "none"){
      h2.style.display = "block";
    }
    else{
      h2.style.display = "none";
    }
  }
}

// Aula 2 DOM
{
  function onOver(element) {
      element.style.backgroundColor = "red";
  }
  function onOut(element) {
    element.style.backgroundColor = "blueviolet";
  }
}
// Aula 3 

{
  function loaded() {
      let aula3 = document.getElementById("aula3");

      // aula3.onclick = alterarText
      aula3.addEventListener("mouseover", alterarText);
      aula3.addEventListener("mouseout", mouseout);


  }

  function alterarText() {
    this.innerHTML = "New Text cria";
  }

  function mouseout() {
    this.innerHTML = "Mouse ta fora do texto";
  }
}

// Exemplo usando this

{
  let titulo1 = document.getElementById("t1");
  let titulo2 = document.getElementById("t2");
  titulo1.onclick = colocarUppercase;
  titulo2.onclick = colocarUppercase;

  function colocarUppercase() {
    this.innerHTML = this.innerHTML.toUpperCase();
    
  }
}

console.log(separacao);
// Parenteses da função 
// ​Obs:

// Quando eu tenho 

// let ret5 = ret3; ret3 sendo uma função 

// eu posso executar isso:

// ret5();

// o resultado vai ser exatamente igual se tivesse feito ret3(), neste caso.

// Elementos pai e filhos

// {
//   window.onload = function () {
    
//         let h1 = document.getElementsByTagName("h1");

//         for (let h of h1) {
//           console.log(h);
//           h.addEventListener('click', papis)
//         }

//         function papis (e) {
//           let t = e.target;
//             console.log(t.parentElement);
//         }
//   }
// }
console.log(separacao);
// Biblioteca math
// Exemplos 

{
  let n = parseInt(Math.random() * 10);
  console.log(n);
}
  
// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// asin(x)	Returns the arcsine of x, in radians
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// ceil(x)	Returns the value of x rounded up to its nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// exp(x)	Returns the value of Ex
// floor(x)	Returns the value of x rounded down to its nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Returns the value of x rounded to its nearest integer
// sin(x)	Returns the sine of x (x is in radians)
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
console.log(separacao);

// JSON

{
  let a = {
    nome: "Wendson",
    nota: 5.5
  }

  let b = JSON.stringify(a);

  let a2 = '{"nome":"Wend", "nota": 8.0}'

  let b2 = JSON.parse(a2)

  console.log(a);
  console.log(b);
  console.log(a2);
  console.log(b2);
  
  console.log(b2.nota);

}

// Exemplo localstorage
{
  // let a = {nome: "Wendson", n1: 7.3}
  // localStorage.setItem("aluno", JSON.stringify(a));

  let a = localStorage.getItem("aluno");
  console.log(a);
  console.log(a);

}
console.log(separacao);
// Aula fazenod um sorteio(vai ter um projeto depois)
{
  let  pessoas = ["Wendson", "Marcos", "Daniel", "Gustavo", "Brenno", "Matheus", "Cleiton", "Nicholas", "Lucas", "Igor", "Ognarc", "Eduardo"];
  
  function sortear(){
    let np = pessoas.length;
    let ns = Math.floor(Math.random() * np);

    document.getElementById("sorteio").innerHTML = pessoas[ns];
  }
}
console.log(separacao);

// Timer e Intervalo

let numero = 0;
let interval;


function atualizarTexto(){
    let h = document.getElementById("tI");
    h.innerHTML += " " + numero;
    numero++;
}

function iniciar() {
  interval = setInterval(atualizarTexto, 1000);
}
function parar() {
  clearInterval(interval);
}

// Timer 
// let timer;

// function atualizarTexto(){
//     let h = document.getElementById("tI");
//     h.innerHTML += " " + numero;
//     numero++;
// }

// function iniciar() {
//   timer = setTimeout(atualizarTexto, 3000);
// }
// function parar() {
//   clearTimeout(timer);
// }

