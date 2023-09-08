// Variáveis
let volatil = 'Alex';   //Não começar o nome da variável com números
var variavelGlobal = "San"; 
const definitivo = 369; //Jamais: let 01definitivo;

console.log(volatil);

volatil = 'TLD';
console.log(volatil, variavelGlobal, definitivo);

// Multiplas variáveis
let a = 3,b = 6,c = 9, d = '|o/';
console.log(a, b, c, d);
console.log(typeof a, typeof d);

const _iniciandoAssim = 'ok', $assimTambem = 'ok';
console.log(_iniciandoAssim, $assimTambem);
//const 1assimNao = 'JavaScript gera erro ao inicializar';
const comNumeros01 = 'ok';
const com1numero = 'ok';
console.log(comNumeros01, com1numero);  

// Case sensitive
let nomecorrido = 'três';
let nomeCorrido = 'seis';

console.log(nomecorrido);
console.log(nomeCorrido);

//    _____Nomes reservados - uso não recomendado___________
//   | break   | continue | catch  | class | const |  case  | 
//   | default | debugger | delete | with  | else  | export |
//   | extends | finally  | for    |   function    |   if   | 
//   | import  |   new    | return | super | this  |   try  |
//   | throw   | typeof   | switch | var   | void  |  while |
//   | yield   |    do    |   in   |  instanceof   |        |
//    ---3------6---------9------------------:v--- ------ --- *3

// Caracteres de controle
console.log("Alex\u0020San");       //Adicionar espaço
console.log('36 \u0009 !');         //Adicionar tabulação
console.log('Aqui! \u000b Ali!');   //Tabulação Vertical
console.log('Consulte em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#caracteres_de_controle');
