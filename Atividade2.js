const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});
terminal.question("qual seu peso? ", function (valor) {
  var peso = Number(valor);
  terminal.question("qual sua altura? ", function (valor) {
    var altura = Number(valor);

    var imc = peso / (altura * altura);

    if (imc < 18.5) {
      console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log("Normal.");
    } else if (imc >= 25.0 && imc <= 29.9) {
      console.log("Sobrepeso.");
    } else {
      console.log("Obesidade.");
    }
    console.log(imc);

    terminal.close();
  });
});

console.log("|Fim da estrução");
