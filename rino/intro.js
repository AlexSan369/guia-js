// Tudo que vem após barras normais duplas é um comentário
// Leiam os comentários atentamente: Eles explicam o código JavaScript.

// variável é um nome simbólico para um valor.
// As variáveis são declaradas com a palavra-chave var:
var x;           // Declara uma variável chamada x.

// Valores podem ser guardados às variáveis com o sinal =
x = 0;          // Agora a variável x tem o valor 0.

// JavaScript aceita vários tipos de valores:

x = 1;              // Números
x = 0.01;           // único tipo para inteiros e reais
x = "hello word";   // String de texto entre aspas, "duplas" ou 'simples'
x = true;           // valore booleano, true ou falso
x = null;           // valor especial que significa "nenhum valor"
x = undefined;      // semelhante ao null

// O tipo de dado mais importante no JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor tipo-> umTexto: valor

var livro = {               // Objetos são colocados entre chaves.
    tema: "JavaScript",     // A propriedade "tema" tem o valor "JavaScript".
    virtual: true           // A propriedade "virtual" tem o valor verdadeiro (true).
};                          // A chave marca o fim do objeto.

// Acesse as propriedades de um objeto com . ou []:
livro.tema;          // => "JavaScript".
livro["virtual"];    // => true
book.autor = "Eu";   // Crie novas propriedades por meio de atribuição.
book.conteudo = {};  // {} é um objeto vazio sem qualquer elemento.

// JavaScript também aceita arrays de valores (lista de valores, indexada em ordem crescente).
var primos = [2, 3, 5, 7];      // Um array de 4 valores, delimitados com [].
primos[0];                      // => 2 : o primeiro elemento do array (índice 0).
primos.length;                  // => 4 : quantidade de elementos no array.
primos[primos.length-1];        // => 7 : último elemento do array.
primos[4] = 11;                 // Adiciona um novo elemento por atribuição.
primos[4] = 13;                 // ou altera um elemento existente por meio de atribuição.
var vazio =[];                  // [] array vazio, sem elementos.
vazio.length;                   // => 0

// Os arrays e objetos podem conter outros arrays e objetos:
var points = [          // Um array com dois elementos.
    {x:0, y:0},         // Cada elemento é um objeto.
    {x:1, y:1}
];
var data = {                 // Um objeto com 2 propriedades.
    trial1: [[1,2], [3,4]],  // O valor de cada propriedade é um array.
    trial2: [[2,3], [4,5]],  // Os elementos dos arrays são arrays.
};

// Uma das maneiras mais comuns de formar expressões em JavaScript
// é usar operadores:
3 + 2                       // => 5: soma
3 - 2                       // => 1: subtração
3 * 2                       // => 6: multiplicação
3 / 2                       // => 1.5: divisão
points[1].x - points[0].x   // => 1: funcionam com operações mais complicadas
"3" + "2"                   // => "32": + soma números, ou "junta" strings

// Javascript define alguns operadores de forma abreviada
var contador = 1;            // Define uma variável com nome "contador"
contador++;                  // Incrementa a variável
contador--;                  // Decrementa a variável
contador += 2;               // Soma 2: o mesmo que contador = contador + 2;
contador /= 3;               // Divide por 3: o mesmo que contador = contador / 3;
contador;                    // => 1: nomes de variáveis também são expressões