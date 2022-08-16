const forma = 'quadrado';
const altura = 5
const largura = 5
let area;
if (forma === 'quadrado') {
    area = altura * largura;
} else {
    area = altura * largura / 2;
}
console.log(area);