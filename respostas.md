# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
**a) A saída será undefined seguido de erro** 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**Resposta:** Alternativa A

**Justificativa:** A variável var x não teve seu valor declarado anteriormente à função "console.log(x)", assim, por ser uma variável global e ter sido definida no início do escopo, não retorna o valor definido x, e sim "undefined". Já let y, por ter sido declarada após o "console.log(y)" haverá um erro na execução do código, pois não é possível acessá-la antes de ser declarada.

---
**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

**c) Substituir if (a || b === 0) por if (a && b === 0)**

d) Remover completamente a verificação if (a || b === 0)

**Resposta:** Alternativa C

**Justificativa:** A condição (a || b === 0) indica que se A ou B forem igual a 0 (sendo o valor 0 e o tipo um número) retorna que se trata de um número inválido. Assim, basta que apenas uma das variáveis seja 0 para que retorne essa sentença. 
______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
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

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

**b) O código imprime 200.**

c) O código imprime 50.

d) O código gera um erro.

**Resposta:** Alternativa B

**Justifativa:** Ao chamar o "console.log(calcularPreco("eletrônico"))", o switch avalia o case "eletrônico", que retornaria o preço 1000, porém por não haver um break ao fim do case, o código continua para o próximo case, o case "vestuário", que teria como retorno o preço 200.
______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

**d) 24**

**Resposta:** Alternativa D

**Justificativa:** Define array com números, após isso, estabelece, na variável resultados, a formação de um novo array com a multiplicação dos valores do array numeros por 2. Após isso, filtra apenas os valores maiores que 5, assim, ficando [6, 8, 10]. Por fim, reduz o array a um único valor, aplicando uma função acumuladora, somando os valores do array, com valor inicial de 0. Assim, 0 + 6, 6 + 8, 14 + 10 = 24.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

**c) ["banana", "abacaxi", "manga", "laranja"]**

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**Respostas:** Alternativa C

**Justificativa:** A função "lista.splice(1, 2, "abacaxi", "manga")" retira os itens que se encontram na posição 1 e 2 da lista definida anteriormente (lista = ["banana", "maçã", "uva", "laranja"]) e as substitui por "abacaxi" e "manga", assim, a lista fica ["banana", "abacaxi", "manga", "laranja"].
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


**a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.**

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**Resposta:** Alternativa A

**Justificativa:** A primeira afirmação conceitua a herança de classes na programação orientada a objetos em JavaScript, que permite que classes herdem métodos e propriedades de outra, reutilizando-se o código da "classe pai". Já a segunda afirmativa complementa a anterior, uma vez que explica como a herança é implementada, em que .extends é usada em JavaScript para criar uma relação de herança entre classes.
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

**a) I e II são verdadeiras.**

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**Resposta:** Alternativa A

**Justificativa:** I. A afirmativa está correta, já que a classe Funcionario herda os atributos de Pessoa pela palavra-chave extends, assim pode acessar os atributos de nome e idades definidos na classe Pessoa, pois eles são inicializados no construtor da classe pai (Pessoa) usando "super(nome, idade)".

II. A afirmativa está correta. A palavra-chave super foi usada para acessar métodos e atributos da classe Pessoa. Assim, pode acessar o método apresentar(), que por ter o mesmo nome do método da classe pai, é substituído pelo método definido na classe filha. Assim, o método apresentar() da classe Funcionario chama o método apresentar() da classe Pessoa usando super.apresentar(), mas também adiciona uma nova funcionalidade (exibir o salário).

III. JavaScript suporta herança de classes usando extends, portanto, a afirmação III é falsa.
______
**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

**b) A asserção é verdadeira e a razão é falsa.**

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**Resposta:** Alternativa B

**Justificativa:** O polimorfismo permite que objetos de diferentes classes respondam ao mesmo método de maneiras diferentes. Isso é alcançado por meio de sobrescrita de métodos, quando métodos da classe filha tem a mesma nomeação da classe pai. Mas em JavaScript, o polimorfismo é implementado principalmente por meio de sobrescrita de métodos, não por sobrecarga de métodos .

______