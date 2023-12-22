const calcularParcelas = () => {
  let valorTotal = parseFloat(prompt("Insira o valor toltal da compra: "));
  let parcelas = parseInt(prompt("insira o valor das parcelas:"));

  if (Number.isInteger(parcelas) && parcelas !== 0) {
    const parcelasArray = [];
    for (let i = 1; i <= parcelas; i++) {
      const valorParcela = valorTotal / parcelas;
      parcelasArray.push(
        valorParcela.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }

    return parcelasArray;
  } else {
    alert("Insirao um valor inteiro para o número das parcelas:");
  }
};

const resultado = calcularParcelas().toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
alert(`Sua compra fica: ${resultado}`);

function simularEmprestimo() {
  // Obter informações do usuário usando o prompt
  let principal = parseFloat(prompt("Digite o valor do empréstimo:"));
  let taxaJuros = parseFloat(prompt("Digite a taxa de juros anual (%):"));
  let numeroParcelas = parseInt(prompt("Digite o número de parcelas:"));

  if (
    isNaN(principal) ||
    isNaN(taxaJuros) ||
    isNaN(numeroParcelas) ||
    principal <= 0 ||
    taxaJuros <= 0 ||
    numeroParcelas <= 0
  ) {
    console.log("Por favor, digite valores válidos.");
    return;
  }

  let taxaMensal = taxaJuros / 100 / 12;

  let pagamentoMensal =
    principal * (taxaMensal / (1 - Math.pow(1 + taxaMensal, -numeroParcelas)));

  console.log("Simulação de Empréstimo:");
  for (let i = 1; i <= numeroParcelas; i++) {
    let juros = principal * taxaMensal;
    let amortizacao = pagamentoMensal - juros;
    console.log(
      `Parcela ${i}: Valor R$${pagamentoMensal.toFixed(
        2
      )} | Juros R$${juros.toFixed(2)} | Amortização R$${amortizacao.toFixed(
        2
      )} | Saldo Devedor R$${principal.toFixed(2)}`
    );
    principal -= amortizacao;
  }
}

simularEmprestimo();

function manipularNumero(numero) {
  return numero * 2;
}

let input = prompt('Digite um número ou "sair" para encerrar:');

while (input.toLowerCase() !== "sair") {
  let numero = parseFloat(input);

  if (!isNaN(numero)) {
    let resultado = manipularNumero(numero);
    console.log(`Resultado para ${numero}: ${resultado}`);
  } else {
    console.log("Por favor, digite um número válido.");
  }

  input = prompt('Digite um número ou "sair" para encerrar:');
}

console.log("Programa encerrado.");
