/** console.log(x);
var x = 5;
console.log(y);
let y = 10; **/

function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));