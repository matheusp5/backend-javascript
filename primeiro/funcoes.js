function imprimeTexto(texto) {
    console.log(texto);
}

function soma(num1, num2) {
    return num1 + num2;
}

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos`;
}

imprimeTexto("oi");
imprimeTexto(1);
const numero = soma(3, 2);
imprimeTexto(numero);
imprimeTexto(nomeIdade("Matheus", 13));

// expressao de funcao
const some = function(num1, num2) { return num1 + num2}

// arrow function
const somaTeste = (num1, num2) => num1 + num2;
imprimeTexto(somaTeste(1, 2));

const apresentacao = nome => `Meu nome é ${nome}`;
imprimeTexto(apresentacao("Matheus"));

const quatro = () => {
    return 2 + 2;
}
imprimeTexto(quatro());