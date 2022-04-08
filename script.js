let calculate = document.getElementById("calculate");

function imc() {
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let result = document.getElementById("result");

  if (height.value === "" || weight.value === "") {
    // alert('[ERROR] Preencha todos os campos!')
    result.textContent = "Preencha todos os campos!";
  } else {
    const imcValue = weight.value / (height.value * height.value);

    let classification = "";

    if (imcValue >= 40) {
      classification = "você está em Obesidade grau III";
    } else if (imcValue >= 35 && imcValue <= 39.9) {
      classification = "você está em Obesidade grau II";
    } else if (imcValue >= 30 && imcValue <= 34.9) {
      classification = "você está em Obesidade grau I";
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      classification = "você está em Sobrepeso";
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      classification = "você está em Peso Normal";
    } else if (imcValue < 18.5) {
      classification = "você está Abaixo do Peso";
    }
    result.textContent = `Seu IMC é ${imcValue.toFixed(1)}, ${classification}`;
  }
}

calculate.addEventListener("click", imc);
