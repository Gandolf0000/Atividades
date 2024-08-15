function gerarMultaAleatoria() {
  function gerarNumeroMulta() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  function gerarDescricaoInfracao() {
    var infracoes = [
      "Excesso de velocidade",
      "Estacionamento irregular",
      "Ultrapassagem indevida",
      "Dirigir usando celular",
      "Farol desligado à noite",
      "Velocidade abaixo do normal",
    ];
    var randomIndex = Math.floor(Math.random() * infracoes.length);
    return infracoes[randomIndex];
  }

  function gerarValorMulta() {
    return (Math.random() * (1000 - 50) + 50).toFixed(2);
  }

  var numeroMulta = gerarNumeroMulta();
  var descricaoInfracao = gerarDescricaoInfracao();
  var valorMulta = gerarValorMulta();

  var multa = {
    numero: numeroMulta,
    descricao: descricaoInfracao,
    valor: valorMulta,
  };

  return multa;
}

var multaAleatoria = gerarMultaAleatoria();
console.log("Multa:");
console.log("Número da Multa:", multaAleatoria.numero);
console.log("Descrição da Infração:", multaAleatoria.descricao);
console.log("Valor da Multa:", multaAleatoria.valor);

// Uso de tables e expressões matemáticas.