let input = document.getElementById("inputText");
let textoEntrada;
let textoSaida = document.getElementById("outputText");
let outputHTML = textoSaida.innerHTML;

const capturarEntrada = () => {
  return (textoEntrada = input.value);
};

const verificarMaiusculas = () => {
  const textoEntrada = capturarEntrada();

  for (let i = 0; i < textoEntrada.length; i++) {
    if (textoEntrada[i] !== textoEntrada[i].toLowerCase()) {
      return true;
    }
  }

  return false;
};

const verificarAcentos = () => {
  const textoEntrada = capturarEntrada();

  let acentos = /[\u00C0-\u017F]/;

  return acentos.test(textoEntrada);
};

const verificarEntrada = () => {
  if (verificarMaiusculas() || verificarAcentos()) {
    return true;
  }
};

const criptografar = () => {
  /*   let temAcento = verificarAcentos();
  let temMaiuscula = verificarMaiusculas(); */
  let textoEntrada = capturarEntrada();
  let resultadoCripto = "";

  const textoInvalido =
    "Insira apenas letras maiúsculas e palavras sem acentos!";

  const semTexto = "Insira ao menos uma palavra para continuar!";

  if (verificarEntrada()) {
    textoSaida.innerText = textoInvalido;
  } else if (textoEntrada === "") {
    textoSaida.innerText = semTexto;
  } else {
    for (let i = 0; i < textoEntrada.length; i++) {
      switch (textoEntrada[i]) {
        case "a":
          resultadoCripto += "ai";
          break;
        case "e":
          resultadoCripto += "enter";
          break;
        case "i":
          resultadoCripto += "imes";
          break;
        case "o":
          resultadoCripto += "ober";
          break;
        case "u":
          resultadoCripto += "ufat";
          break;
        default:
          resultadoCripto += textoEntrada[i];
      }
    }

    textoSaida.innerText = resultadoCripto;
  }
};

const descriptografar = () => {
  let inputTexto = capturarEntrada();

  const textoInvalido =
    "Insira apenas letras maiúsculas e palavras sem acentos!";

  const semTexto = "Insira ao menos uma palavra para continuar!";

  if (verificarEntrada()) {
    textoSaida.innerText = textoInvalido;
  } else if (inputTexto === "") {
    textoSaida.innerText = semTexto;
  } else {
    inputTexto = inputTexto.replaceAll("ai", "a");
    inputTexto = inputTexto.replaceAll("enter", "e");
    inputTexto = inputTexto.replaceAll("imes", "i");
    inputTexto = inputTexto.replaceAll("ober", "o");
    inputTexto = inputTexto.replaceAll("ufat", "u");

    textoSaida.innerText = inputTexto;
  }
};

const limparTexto = () => {
  input.value = "";
  textoSaida.innerHTML = outputHTML;
};
