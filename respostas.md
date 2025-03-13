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