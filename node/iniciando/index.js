const chalk = require('chalk');
const fs = require('fs');

// console.log(chalk.magenta("Hello, World!"));
// console.log();
function trataErro (erro) {
    throw new Error(chalk.red(erro));
}
function extraiLink(texto) {
    const regex = /\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm;
    const links = texto.metch(regex);
    console.log(links);
}
// function pegaArquivo(arquivo) {
//     const encoding = 'utf-8'
//     fs.readFile(arquivo, encoding, (err, data) => {
//         if (err) {
//             trataErro(err);
//         }
//         console.log(chalk.green(data));
//     });
// }


// function pegaArquivo(arquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(arquivo, encoding)
//     .then((data) => { // DEPOIS DA RECEBER OS DADOS (DE FORMA ASSINCRONA)
//         console.log(data);
//     }).catch((erro) => trataErro(erro)); // SE DER ALGUM ERRO
// }

async function pegaArquivo(arquivo) {
    const encoding = 'utf-8';
    try {
        const data = await fs.promises.readFile(arquivo);
        console.log(chalk.green(data));
        extraiLink(data);
    } catch (err) {
        trataErro(err);
    }
}

pegaArquivo('./arquivos/texto1.md')