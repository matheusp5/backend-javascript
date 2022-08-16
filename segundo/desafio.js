const alunos = [
  'Joao',
  'Ana',
  'Caio',
  'Lara',
  'Matheus',
  'Leo'
];

console.log("Chamada antiga: ");
alunos.splice(1, 2, 'Rodrigo'); // Removeu do primeiro item até o segundo e adicionou Rodrigo entre eles
console.log(`Lista de chamada: ${alunos}`);