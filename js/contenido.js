// Variables globales
let tiempoRestante;
let temporizador;
let preguntaActual = 0;
let puntuacion = 0;

// Datos de ejemplo (¡debes completarlos con tus preguntas!)
const preguntas = {
    Películas: {
        Facil: [
            {
                pregunta: "¿Quién dirigió 'El Padrino'?",
                opciones: ["Steven Spielberg", "Francis Ford Coppola", "Martin Scorsese"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué película ganó el Oscar a Mejor Película en 1994?",
                opciones: ["Forrest Gump", "Pulp Fiction", "El Rey León"],
                respuestaCorrecta: 0,
            }
        ],
        Medio: [
            {
                pregunta: "¿Qué actor interpreta a Neo en 'Matrix'?",
                opciones: ["Keanu Reeves", "Brad Pitt", "Tom Cruise"],
                respuestaCorrecta: 0,
            }
        ],
        Dificil: [
            {
                pregunta: "¿En qué año se estrenó 'Tiburón'?",
                opciones: ["1972", "1975", "1980"],
                respuestaCorrecta: 1,
            }
        ]
    },
    Juegos: {
        Facil: [
            {
                pregunta: "¿Qué compañía creó Minecraft?",
                opciones: ["Electronic Arts", "Mojang", "Ubisoft"],
                respuestaCorrecta: 1,
            }
        ],
        Medio: [
            {
                pregunta: "¿Quién es el protagonista de 'The Legend of Zelda'?",
                opciones: ["Zelda", "Ganondorf", "Link"],
                respuestaCorrecta: 2,
            }
        ],
        Dificil: [
            {
                pregunta: "¿En qué año se lanzó 'Super Mario Bros'?",
                opciones: ["1983", "1985", "1987"],
                respuestaCorrecta: 1,
            }
        ]
    },
    // Añade más categorías como "Música", "Deportes", etc.
};
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

// Temporizador
function iniciarTemporizador(segundos) {
    tiempoRestante = segundos;
    actualizarTemporizador();

    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarTemporizador();

        if (tiempoRestante <= 0) terminarJuego();
    }, 1000);
}

function actualizarTemporizador() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    document.getElementById("temporizador").textContent =
        `${minutos}:${segundos.toString().padStart(2, "0")}`;
}

// Mostrar preguntas
function mostrarPreguntas(categoria, dificultad) {
    const preguntasCategoria = preguntas[categoria][dificultad];

    if (!preguntasCategoria || preguntaActual >= preguntasCategoria.length) {
        terminarJuego();
        return;
    }

    const pregunta = preguntasCategoria[preguntaActual];
    document.getElementById("pregunta").textContent = pregunta.pregunta;
    const opcionesContainer = document.getElementById("opciones");
    opcionesContainer.innerHTML = "";

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

    if (opcionSeleccionada === respuestaCorrecta) {
        opciones[opcionSeleccionada].classList.add("correcta");
        puntuacion++;
    } else {
        opciones[opcionSeleccionada].classList.add("incorrecta");
        opciones[respuestaCorrecta].classList.add("correcta");
    }

    document.getElementById("puntuacion").textContent = `Aciertos: ${puntuacion}`;

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
    clearInterval(temporizador);
    sessionStorage.setItem("puntuacionFinal", puntuacion);
    window.location.href = "resultados.html";
}