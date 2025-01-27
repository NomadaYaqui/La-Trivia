// Variables globales
let tiempoRestante;
let temporizador;
let preguntaActual = 0;
let puntuacion = 0;

// Datos de la trivia!!
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

    Música: {
        Facil: [
            {
                pregunta: "¿Quién cantó la famosa canción 'Shape of You'?",
                opciones: ["Ed Sheeran", "Justin Bieber", "Ariana Grande"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué instrumento toca Beethoven?",
                opciones: ["Violín", "Piano", "Guitarra"],
                respuestaCorrecta: 1,
            }
        ],
        Medio: [
            {
                pregunta: "¿Quién fue el fundador de los Beatles?",
                opciones: ["John Lennon", "Paul McCartney", "George Harrison"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué banda lanzó el álbum 'Dark Side of the Moon'?",
                opciones: ["Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
                respuestaCorrecta: 1,
            }
        ],
        Dificil: [
            {
                pregunta: "¿Quién compuso la ópera 'La Traviata'?",
                opciones: ["Giuseppe Verdi", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué año murió Jimi Hendrix?",
                opciones: ["1968", "1970", "1973"],
                respuestaCorrecta: 1,
            }
        ]
    },
    Deportes: {
        Facil: [
            {
                pregunta: "¿En qué deporte se utiliza una raqueta?",
                opciones: ["Fútbol", "Tenis", "Béisbol"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Quién es conocido como el 'Pelé' del fútbol?",
                opciones: ["Lionel Messi", "Cristiano Ronaldo", "Pelé"],
                respuestaCorrecta: 2,
            }
        ],
        Medio: [
            {
                pregunta: "¿Qué país ganó el Mundial de Fútbol 2018?",
                opciones: ["Francia", "Brasil", "Alemania"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién tiene el récord de más goles en la historia de la NBA?",
                opciones: ["Kobe Bryant", "Michael Jordan", "LeBron James"],
                respuestaCorrecta: 1,
            }
        ],
        Dificil: [
            {
                pregunta: "¿En qué año se fundó la NBA?",
                opciones: ["1946", "1950", "1960"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el nombre completo de la Fórmula 1?",
                opciones: ["Formula One World Championship", "Formula 1 World Series", "Formula Championship"],
                respuestaCorrecta: 0,
            }
        ]
    },

    Ciencia: {
        Facil: [
            {
                pregunta: "¿Cuál es el planeta más cercano al Sol?",
                opciones: ["Venus", "Mercurio", "Marte"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué elemento químico tiene el símbolo 'O'?",
                opciones: ["Oxígeno", "Oro", "Osmio"],
                respuestaCorrecta: 0,
            }
        ],
        Medio: [
            {
                pregunta: "¿Cuál es el proceso mediante el cual las plantas convierten la luz en energía?",
                opciones: ["Respiración", "Fotosíntesis", "Fermentación"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Quién es conocido como el padre de la teoría de la relatividad?",
                opciones: ["Isaac Newton", "Galileo Galilei", "Albert Einstein"],
                respuestaCorrecta: 2,
            }
        ],
        Dificil: [
            {
                pregunta: "¿Qué científico formuló las leyes del movimiento planetario?",
                opciones: ["Johannes Kepler", "Isaac Newton", "Galileo Galilei"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué es la constante de Planck?",
                opciones: ["Un valor relacionado con la energía y la frecuencia de la luz", "La velocidad de la luz en el vacío", "La masa de un electrón"],
                respuestaCorrecta: 0,
            }
        ]
    },

    Series: {
        Facil: [
            {
                pregunta: "¿En qué ciudad se desarrolla la serie 'Friends'?",
                opciones: ["Los Ángeles", "Chicago", "Nueva York"],
                respuestaCorrecta: 2,
            },
            {
                pregunta: "¿Quién interpreta al personaje de 'Sherlock Holmes' en la serie 'Sherlock'?",
                opciones: ["Matt Smith", "Benedict Cumberbatch", "David Tennant"],
                respuestaCorrecta: 1,
            }
        ],
        Medio: [
            {
                pregunta: "¿Cómo se llama el protagonista de 'Breaking Bad'?",
                opciones: ["Jesse Pinkman", "Walter White", "Saul Goodman"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿En qué serie aparece el personaje 'Eleven'?",
                opciones: ["The Walking Dead", "Stranger Things", "The Boys"],
                respuestaCorrecta: 1,
            }
        ],
        Dificil: [
            {
                pregunta: "¿En qué año se estrenó la serie 'The Wire'?",
                opciones: ["2000", "2002", "2004"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué personaje de 'Game of Thrones' fue conocido como el 'Rey de la Noche'?",
                opciones: ["Jon Snow", "Theon Greyjoy", "Night King"],
                respuestaCorrecta: 2,
            }
        ]
    },

    Historia: {
        Facil: [
            {
                pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
                opciones: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué año terminó la Segunda Guerra Mundial?",
                opciones: ["1945", "1939", "1960"],
                respuestaCorrecta: 0,
            }
        ],
        Medio: [
            {
                pregunta: "¿Qué imperio construyó la Gran Muralla China?",
                opciones: ["Imperio Romano", "Imperio Chino", "Imperio Mongol"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Quién fue el líder de la Revolución Francesa?",
                opciones: ["Napoleón Bonaparte", "Luis XVI", "Maximilien Robespierre"],
                respuestaCorrecta: 2,
            }
        ],
        Dificil: [
            {
                pregunta: "¿En qué año comenzó la Guerra Civil Americana?",
                opciones: ["1861", "1850", "1870"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién fue el último emperador romano de Occidente?",
                opciones: ["Rómulo Augústulo", "Teodosio I", "Constantino I"],
                respuestaCorrecta: 0,
            }
        ]
    },

    Animales: {
        Facil: [
            {
                pregunta: "¿Qué animal es conocido como el 'Rey de la Jungla'?",
                opciones: ["Elefante", "León", "Tigre"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué animal pone huevos y es un mamífero?",
                opciones: ["Canguro", "Ornitorrinco", "Ballena"],
                respuestaCorrecta: 1,
            }
        ],
        Medio: [
            {
                pregunta: "¿Cuántos corazones tiene un pulpo?",
                opciones: ["1", "2", "3"],
                respuestaCorrecta: 2,
            },
            {
                pregunta: "¿Cuál es el mamífero más grande del mundo?",
                opciones: ["Elefante africano", "Ballena azul", "Jirafa"],
                respuestaCorrecta: 1,
            }
        ],
        Dificil: [
            {
                pregunta: "¿Qué animal tiene la capacidad de regenerar sus extremidades?",
                opciones: ["Gecko", "Axolotl", "Cangrejo"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿En qué continente se encuentra el lince ibérico?",
                opciones: ["Asia", "Europa", "América"],
                respuestaCorrecta: 1,
            }
        ]
    }


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