// Variables globales
let tiempoRestante;
let temporizador;
let preguntaActual = 0;
let puntuacion = 0;

import { preguntas } from '/js/datos.js';


// Temporizador
function iniciarTemporizador(segundos) {
    // Detener temporizador existente si lo hay
    if (typeof temporizador !== "undefined") {
        clearInterval(temporizador);
    }

    tiempoRestante = segundos;
    actualizarTemporizador();

    // Iniciar nuevo temporizador
    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarTemporizador();

        if (tiempoRestante <= 0) {
            clearInterval(temporizador); // Detener el temporizador
            terminarJuego();
        }
    }, 1000);
}


function actualizarTemporizador() {
    if (tiempoRestante < 0) return;

    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    const temporizadorElem = document.getElementById("temporizador");

    if (!temporizadorElem) {
        console.error("❌ ERROR: No se encontró el elemento con ID 'temporizador'");
        return;
    }

    temporizadorElem.textContent = `${minutos}:${segundos.toString().padStart(2, "0")}`;
    temporizadorElem.style.color = tiempoRestante <= 10 ? "red" : "";
}


// Mostrar preguntas
function mostrarPreguntas(categoria, dificultad) {
    // Acceder a las preguntas de la categoría y dificultad, pero solo si existen
    const preguntasCategoria = preguntas[categoria]?.[dificultad];

    // Validar que las preguntas para la dificultad existan
    if (!preguntasCategoria) {
        alert("No se encontraron preguntas para esta categoría o dificultad. Verifica los datos.");
        terminarJuego();
        return;
    }

    // Validar que haya preguntas restantes
    if (preguntaActual >= preguntasCategoria.length) {
        terminarJuego();
        return;
    }

    // Mostrar la pregunta actual
    const pregunta = preguntasCategoria[preguntaActual];
    document.getElementById("pregunta").textContent = pregunta.pregunta;
    const opcionesContainer = document.getElementById("opciones");
    opcionesContainer.innerHTML = "";

    // Crear botones para las opciones
    pregunta.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.textContent = opcion;
        boton.onclick = () => verificarRespuesta(index, pregunta.respuestaCorrecta);
        opcionesContainer.appendChild(boton);
    });
}


// Verificar respuesta
function verificarRespuesta(opcionSeleccionada, respuestaCorrecta) {
    const opciones = document.querySelectorAll(".opcion");

    // Deshabilitar todos los botones para evitar múltiples clics
    opciones.forEach((opcion) => {
        opcion.disabled = true;
    });

    // Verificar si la respuesta es correcta
    if (opcionSeleccionada === respuestaCorrecta) {
        opciones[opcionSeleccionada].classList.add("correcta");
        puntuacion++;
    } else {
        opciones[opcionSeleccionada].classList.add("incorrecta");
        opciones[respuestaCorrecta].classList.add("correcta");
    }

    // Actualizar la puntuación
    document.getElementById("puntuacion").textContent = `Aciertos: ${puntuacion}`;

    // Pasar a la siguiente pregunta después de un pequeño retraso
    setTimeout(() => {
        preguntaActual++;
        mostrarPreguntas(
            sessionStorage.getItem("categoriaNombre"),
            sessionStorage.getItem("dificultad")
        );
    }, 1500);
}


// Terminar juego
function terminarJuego() {
    if (temporizador) clearInterval(temporizador);
    sessionStorage.setItem("puntuacionFinal", puntuacion);
    window.location.href = "resultados.html";
}

// Cargar configuración al iniciar
function cargarConfiguracion() {
    const dificultad = sessionStorage.getItem("dificultad");
    const tiempo = sessionStorage.getItem("tiempo");
    const categoria = sessionStorage.getItem("categoriaNombre");

    if (!dificultad || !tiempo || !categoria) {
        alert("Configuración incompleta. Redirigiendo...");
        window.location.href = "trivia.html";
        return;
    }

    iniciarTemporizador(parseInt(tiempo));
    mostrarPreguntas(categoria, dificultad);
}

// Asegurar que `cargarConfiguracion` se ejecute al cargar la página
document.addEventListener("DOMContentLoaded", cargarConfiguracion);




