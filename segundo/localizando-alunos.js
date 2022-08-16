const alunos = [
    "Matheus",
    "Isabela"
]

const notas = [
    9.5,
    8
];

let alunoComNota = [alunos, notas];

const NomeNota = (nomeAluno) => {
 if (alunoComNota[0].includes(nomeAluno)) { // verifica se existe um indice com o nome do aluno
     let indice = alunoComNota[0].indexOf(nomeAluno);
     console.log(indice);
     console.log(nomeAluno + ': ' + alunoComNota[1][indice]);
 } else {
     console.log("Nao existe");
 }
}

NomeNota("Matheus")