/** console.log(x);
var x = 5;
console.log(y);
let y = 10; **/

/** function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0)); **/

/** function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico")); **/

/** let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado); **/

/** let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista) **/

/** class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  } **/
  
/**  class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
      super(nome, idade);
      this.salario = salario;
    }
  
    apresentar() {
      super.apresentar();
      console.log(`Meu salário é R$ ${this.salario}.`);
    }
  }
  const yan = new Funcionario("yan", 18, 100000000);
  yan.apresentar() **/

  /** function somaArray(numeros) {
    let soma = 0; // Inicializa a variável soma
    for (i = 0; i < numeros.length; i++) { // Declara a variável i com let
        soma += 2 * numeros[i]; // Acumula a soma
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4])); // Saída: 20 **/

class Produto {
  constructor(nome, preco){
    this.nome = nome;
    this.preco = preco
  }
  calcularDesconto(){
    const valorDescontado = thispreco * 0.9
    console.log(`O produto ${this.nome}, que antes custava R$${this.preco}, agora com desconto de 10%, custa R$${valorDescontado}`);
  }
}
class Livro extends Produto {
  constructor(nome, preco){
    super(nome, preco);
  }
  calcularDesconto(){
    const valorDescontado = this.preco * 0.8
    console.log(`O livro ${this.nome}, que antes custava R$${this.preco}, agora com desconto de 20%, custa R$${valorDescontado}`);
  }
}
  const produto = new Produto("Notebook", 2500);
  produto.calcularDesconto();

 const livro = new Livro("Jogos Vorazes", 150);
 livro.calcularDesconto();
