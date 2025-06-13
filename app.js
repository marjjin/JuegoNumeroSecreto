let btnEnviar = document.getElementById("btnEnviar");

let inputNumero = document.getElementById("inputNumero");

let numerosIntentados = document.getElementById("numerosIntentados");

let pista = document.getElementById("pista");

let btnReiniciar = document.getElementById("btnReiniciar");


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
btnEnviar.addEventListener("click", function () {
   let numero = parseInt(inputNumero.value);
    
    if (isNaN(numero) || numero < 1 || numero > 100) {
    alert("Por favor, ingresa un número entre 1 y 100.");
    return;
  }

  if (intentos == 10) {
    alert("¡Has alcanzado el número máximo de intentos!");
    btnEnviar.disabled = true;
    alert(`El número secreto era ${numeroSecreto}.`);
    inputNumero.disabled = true;
    return;
  }else {
    intentos++;
  }



  numerosIntentados.innerHTML += `<li>${numero}</li>`;

  if (numero === numeroSecreto) {
    pista.style.color = "green";
    pista.innerHTML = `¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`;
    btnEnviar.disabled = true;
  } else if (numero < numeroSecreto) {
    pista.style.color = "blue";
    pista.innerHTML = "El número secreto es mayor.";
  } else {
    pista.style.color = "red";
    pista.innerHTML = "El número secreto es menor.";
  }
  inputNumero.value = "";
});

btnReiniciar.addEventListener("click", function () {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  numerosIntentados.innerHTML = "";
  pista.innerHTML = "";
  inputNumero.value = "";
  btnEnviar.disabled = false;
  inputNumero.disabled = false;
});


inputNumero.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnEnviar.click();
    }
});

// Inicializar el juego al cargar la página
window.onload = function () {
    pista.innerHTML = "¡Adivina el número secreto entre 1 y 100!";
    inputNumero.focus();
};