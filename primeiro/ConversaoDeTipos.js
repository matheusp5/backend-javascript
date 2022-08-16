const numero = 123;
const numeroString = "5";
const fakeNumber = Number("12345");
const fakeNumber2 = Number("1a");

console.log(numero + numeroString);
console.log(numero + Number(numeroString)); // Number() converte string pra numero
console.log(numeroString + String(numero));
console.log(fakeNumber + 5);
console.log(fakeNumber2); // NaN = Not a Number