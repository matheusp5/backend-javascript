/*
    0 = false
    1 = true

    string vazia = false
 */

const logado = true;
const contaPaga = false;
const nulled = null;
let minhaVar;
let testeAnulado = null;


console.log(logado == true);
console.log(0 == true);
console.log(1 == true);
console.log("" == false);
console.log(minhaVar)
console.log(testeAnulado)

let nome = "Matheus";
let idade = 13;

console.log(typeof nome);
if (typeof nome == "string") {
    console.log("É uma string");
} else {
    console.log("Não é uma string");
}