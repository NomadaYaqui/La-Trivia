let tiempoRestante;
let temporizador;

function cargarConfiguracion() {
    // Obtener datos guardados
    const dificultad = sessionStorage.getItem("dificultad");
    const tiempo = sessionStorage.getItem("tiempo");
    const categoria = sessionStorage.getItem("categoriaNombre");

    // Validar
    if (!dificultad || !tiempo || !categoria) {
        alert("Configuración incompleta. Redirigiendo...");
        window.location.href = "trivia.html";
        return;
    }

    // Iniciar juego
    iniciarTemporizador(parseInt(tiempo));
    mostrarPreguntas(categoria, dificultad);
}

function iniciarTemporizador(segundos) {
    tiempoRestante = segundos;
    actualizarTemporizador();

    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarTemporizador();

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            terminarJuego();
        }
    }, 1000);
}

function actualizarTemporizador() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    document.getElementById("temporizador").textContent =
        `${minutos}:${segundos.toString().padStart(2, "0")}`;
}

function terminarJuego() {
    alert("¡Tiempo agotado! 🕒");
    sessionStorage.clear();
    window.location.href = "categorias.html";
}

// Función de ejemplo (debes implementarla)
function mostrarPreguntas(categoria, dificultad) {
    // Lógica para cargar preguntas desde una API o JSON
    console.log(`Cargando preguntas de ${categoria} (${dificultad})...`);
}