
 const notas =  [
    10,
     6,
     8
 ];

notas.push(7); // adicionar itens ao array
 // notas.pop() = tira o ultimo elemento da lista

var notaTotal = 0;

notas.forEach((nota, index, array) => {
    notaTotal += nota;
})

let media = notaTotal / notas.length;

console.log(media);

