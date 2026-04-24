// calculadora.js

// process.argv[0] é o caminho do executável do node
// process.argv[1] é o caminho do arquivo .js
// Os argumentos do usuário começam no índice 2
const args = process.argv.slice(2);

// Verifica se os 3 argumentos foram fornecidos
if (args.length !== 3) {
  console.log("Uso: node calculadora.js <numero1> <operador> <numero2>");
  console.log("Operadores: +, -, *, /");
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operador = args[1];
const num2 = parseFloat(args[2]);

// Validação dos números
if (isNaN(num1) || isNaN(num2)) {
  console.log("Erro: Por favor, insira números válidos.");
  process.exit(1);
}

let resultado;

// Lógica da calculadora
switch (operador) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.log("Erro: Divisão por zero não é permitida.");
      process.exit(1);
    }
    resultado = num1 / num2;
    break;
  default:
    console.log("Operador inválido. Use +, -, *, ou /");
    process.exit(1);
}

console.log(`${num1} ${operador} ${num2} = ${resultado}`);

