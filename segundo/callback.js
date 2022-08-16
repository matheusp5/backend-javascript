const notas = [
    5,
    8,
    10,
    6
];

const notasAtualizadas = notas.map( nota => nota === 10 ? nota : nota++);

console.log(notasAtualizadas);