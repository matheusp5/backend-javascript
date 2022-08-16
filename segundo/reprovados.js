const nomes = ['Ana', 'Matheus', 'Maria'];
const notas = [ 7, 10, 4];

const reprovados = nomes.filter((_, indice) => notas[indice] < 5);

console.log(reprovados);