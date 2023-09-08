// Number
console.log(3);
console.log(typeof 3);
console.log(typeof 3.69);
console.log(typeof -369);

// Aritimética

console.log(13 + 16 + 10 + 330);

// Especial Numbers

console.log(typeof Infinity);
console.log(typeof infinity); //CaseSensitive
console.log(typeof -Infinity);
console.log(12 * "Alex");
console.log(typeof NaN); //Not a Number

// String/Texto
console.log("Alex");
console.log('Sander');
console.log('369');

// Símbolos especiais
console.log(`\\0/`); // Barra invertida '\' para escapar do texto e criar uma ação
console.log("Aqui é uma linha \nAqui é outra linha!");

// Concatenando/unindo textos
console.log("Instituto" + "da" + "Oportunidade" + "Social");
console.log("Idade:" + 30 + "\nSigno:"+"Peixes");

// Template Strings
console.log(`Daqui 20 anos vou ter: ${30 + 20}`); //Técnica de interpolação
console.log(`3 + 6 = ${3+6}`);//Dentro do bloco ${} realizamos operações JavaScript

//Comparações
console.log(" '>' Maior que");
console.log(" '<' Menor que");
console.log(" '>= ou <=' Maior e Menor, igual a");
console.log(" '==' Igual a");
console.log(" '!=' Deferente de");

// Booleans, true ou false
console.log(3 > 6);
console.log('Alex' == 'alex');
console.log(1+8 == 6+3);
console.log(typeof true);

// Tabela Verdade

/* 
------> **************************************************
------> *                    :v                          *
------> *  ___________________________________________   *
------> * |___A___|___B___|_A AND B_|_A OR  B_|_NOT A_|  *
------> * |_false_|_false_|__false__|__false__|_true__|  *
------> * |_false_|_true__|__false__|__true___|_true__|  *
------> * |_true__|_false_|__false__|__true___|_false_|  *
------> * |_true__|_true__|__true___|__true___|_true__|  *
------> *  ~~~3~~~~~~6~~~~~~~~~9~~~~~~~~~~~~~~~~~~~~~~   *
------> *                                                *
------> **************************************************

*/

// Operadores Lógicos
console.log(false && false);// '&&' representa AND(E)
console.log(false && true);
console.log(true && false);// Teste com outros exemplos
console.log(true && true);// console.log(2 > 9 && 6 < 3);


console.log(false || false);// '||' representa OR(OU)
console.log(false || true);
console.log(true || false);//Experimente com strings
console.log(true || true);// console.log(3 == 'seis' && 9 === 'San');

console.log(!true);
console.log(!false);

// Empty values - vazios
console.log(typeof null, typeof undefined);
console.log(typeof null == typeof undefined); // undefined normalmente é retornado quando há algo errado
console.log(typeof null ===typeof undefined);// null normanmente definido pelo desenvolvedor

// Mudanças de tipos
console.log(3 * null);
console.log("San" + "369");
console.log('3' + 6);
console.log(10 - '1');
