// Invocando funções nativas

/* const confirmacao = confirm("Pressione Ok");
console.log(confirmacao);       // Retorna false (booleano)

const iteracao = prompt("Digite seu nome");
console.log(iteracao);

const alerta = alert(`Avisa algo para ${iteracao}`);
 */
// Funções Matemáticas

const maior = Math.max(3, 6, 9);    //Funções podem ser atribuidas
console.log(maior);

const inteiro = Math.floor(36.9); //Note que utilizamos '.' para separar casas decimais
console.log(inteiro);

const arredondar = Math.ceil(368.9);
console.log(arredondar);

// Criar uma função

function somar (numero1, numero2){
    let resultado = numero1 + numero2;
    console.log(resultado);
}

somar(0, 3);    //Aqui chamamos a função
somar(2, 4);    // e informamos o numero1 = 2
somar(3, 6);    // numero2 = 6

function adivinharIdade () {
    let nasc = +prompt('Digite os 4 digitos do seu ano de nascimento');     //Sinal '+' converte texto para número
    let idade = 2023 - nasc;                                                //Podemos realizar cálculos dentro de varáveis 
    console.log(`Sua idade é: ${idade} anos`)
}

adivinharIdade();