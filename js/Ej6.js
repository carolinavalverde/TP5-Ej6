document.addEventListener("DOMContentLoaded", function () {
  let temporizador;
  let tiempoInicial = 60;
  let tiempoRestante = tiempoInicial;
  let corriendo = false;

  function iniciarTemporizador() {
    if (!corriendo) {
      corriendo = true;
      temporizador = setInterval(function () {
        if (tiempoRestante > 0) {
          tiempoRestante--;
          mostrarTiempo();
        } else {
          pausarTemporizador();
        }
      }, 1000);
    }
  }

  function pausarTemporizador() {
    corriendo = false;
    clearInterval(temporizador);
  }

  function resetearTemporizador() {
    corriendo = false;
    clearInterval(temporizador);
    tiempoRestante = tiempoInicial;
    mostrarTiempo();
  }

  function mostrarTiempo() {
    const segundos = tiempoRestante % 60;
    const minutos = Math.floor(tiempoRestante / 60) % 60;
    const horas = Math.floor(tiempoRestante / 3600);

    document.getElementById("temporizador").innerText = `${horas
      .toString()
      .padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  }

  document.getElementById("iniciar").addEventListener("click", function () {
    tiempoInicial = parseInt(document.getElementById("tiempo").value, 10);
    resetearTemporizador();
    iniciarTemporizador();
  });

  document
    .getElementById("pausar")
    .addEventListener("click", pausarTemporizador);
  document
    .getElementById("resetear")
    .addEventListener("click", resetearTemporizador);
});
