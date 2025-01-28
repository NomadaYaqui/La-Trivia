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
            },
            {
                pregunta: "¿Cuál fue la primera película animada en ganar un Oscar a Mejor Película Animada?",
                opciones: ["Shrek", "El Rey León", "La Bella y la Bestia"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué saga de películas es famosa por la frase 'Que la fuerza te acompañe'?",
                opciones: ["Star Wars", "Star Trek", "Harry Potter"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién interpreta a Jack Dawson en 'Titanic'?",
                opciones: ["Leonardo DiCaprio", "Matt Damon", "Brad Pitt"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el nombre del dragón en 'Mulan'?",
                opciones: ["Mushu", "Shan Yu", "Feng"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué película animada aparece el personaje 'Buzz Lightyear'?",
                opciones: ["Toy Story", "Monsters, Inc.", "Cars"],
                respuestaCorrecta: 0,
            }
        ],
        Medio: [
            {
                pregunta: "¿Qué actor interpreta a Neo en 'Matrix'?",
                opciones: ["Keanu Reeves", "Brad Pitt", "Tom Cruise"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué película de terror aparece el hotel Overlook?",
                opciones: ["El Resplandor", "Psicosis", "El Exorcista"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué director es famoso por la trilogía de 'El Señor de los Anillos'?",
                opciones: ["Peter Jackson", "Christopher Nolan", "James Cameron"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es la película más taquillera de la historia (ajustada por inflación)?",
                opciones: ["Titanic", "Avatar", "Lo que el viento se llevó"],
                respuestaCorrecta: 2,
            },
            {
                pregunta: "¿En qué año se estrenó la primera película de 'Indiana Jones'?",
                opciones: ["1980", "1981", "1983"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué actor ganó un Oscar por interpretar al Joker en 'The Dark Knight'?",
                opciones: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson"],
                respuestaCorrecta: 0,
            }
        ],
        Dificil: [
            {
                pregunta: "¿En qué año se estrenó 'Tiburón'?",
                opciones: ["1972", "1975", "1980"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Cuál fue la primera película completamente en color de la historia?",
                opciones: ["El Mago de Oz", "Becky Sharp", "Gone with the Wind"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué película de Stanley Kubrick fue retirada temporalmente del Reino Unido por petición del director?",
                opciones: ["La naranja mecánica", "2001: Una odisea del espacio", "El resplandor"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el verdadero nombre del personaje 'El Padrino', Vito Corleone?",
                opciones: ["Vito Andolini", "Vito Mancini", "Vito Bonasera"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué director japonés inspiró a George Lucas para 'Star Wars'?",
                opciones: ["Akira Kurosawa", "Hayao Miyazaki", "Kenji Mizoguchi"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué película ganó el primer premio a Mejor Película Extranjera en los Oscar?",
                opciones: ["Ladrón de bicicletas", "La strada", "Sciuscià"],
                respuestaCorrecta: 2,
            }
        ]
    },
    Juegos: {
        Facil: [
            {
                pregunta: "¿Qué compañía creó Minecraft?",
                opciones: ["Electronic Arts", "Mojang", "Ubisoft"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿En qué videojuego aparece el personaje 'Mario' por primera vez?",
                opciones: ["Super Mario Bros", "The Legend of Zelda", "Donkey Kong"],
                respuestaCorrecta: 2,
            },
            {
                pregunta: "¿Qué consola fue la primera en incluir juegos en 3D de manera popular?",
                opciones: ["Nintendo 64", "PlayStation", "Sega Genesis"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Cómo se llama el villano principal de la saga 'Sonic'?",
                opciones: ["Dr. Robotnik", "Dr. Wily", "Dr. Cortex"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué videojuego es conocido por el lema '¡Atrápalos a todos!'?",
                opciones: ["Digimon", "Pokémon", "Monster Hunter"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Cuál es el nombre del protagonista de 'The Legend of Zelda'?",
                opciones: ["Link", "Ganondorf", "Zelda"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué compañía desarrolló 'Fortnite'?",
                opciones: ["Activision", "Electronic Arts", "Epic Games"],
                respuestaCorrecta: 2,
            }
        ],
        Medio: [
            {
                pregunta: "¿Quién es el protagonista de 'The Legend of Zelda'?",
                opciones: ["Zelda", "Ganondorf", "Link"],
                respuestaCorrecta: 2,
            },
            {
                pregunta: "¿Qué videojuego popular incluye un personaje llamado 'Geralt de Rivia'?",
                opciones: ["Dark Souls", "The Witcher", "Elden Ring"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿En qué año se lanzó el primer 'Call of Duty'?",
                opciones: ["2005", "2003", "2001"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué franquicia de videojuegos incluye una región llamada 'Hyrule'?",
                opciones: ["Fire Emblem", "Final Fantasy", "The Legend of Zelda"],
                respuestaCorrecta: 2,
            },
            {
                pregunta: "¿Cuál es el nombre del creador de 'Minecraft'?",
                opciones: ["Notch", "Toby Fox", "Phil Spencer"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué videojuego de disparos es conocido por su modo 'Battle Royale'?",
                opciones: ["Overwatch", "PUBG", "Apex Legends"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué videojuego introdujo el personaje de 'Pikachu'?",
                opciones: ["Animal Crossing", "Pokémon Red & Blue", "Super Smash Bros"],
                respuestaCorrecta: 1,
            }
        ],
        Dificil: [
            {
                pregunta: "¿En qué año se lanzó 'Super Mario Bros'?",
                opciones: ["1983", "1985", "1987"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué videojuego fue lanzado en 1980 y es considerado el primero en incluir un 'easter egg'?",
                opciones: ["Pong", "Adventure", "Pac-Man"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué videojuego popular fue desarrollado por Hideo Kojima?",
                opciones: ["Resident Evil", "Metal Gear Solid", "Silent Hill"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Cómo se llama el enemigo final en 'Dark Souls III'?",
                opciones: ["Ornstein", "Soul of Cinder", "Abyss Watchers"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué juego estableció el récord mundial por ser el más vendido en una consola en 2022?",
                opciones: ["Grand Theft Auto V", "Minecraft", "Tetris"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué videojuego de rol de 1997 es famoso por el personaje 'Cloud Strife'?",
                opciones: ["Dragon Quest", "Final Fantasy VII", "Chrono Trigger"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué desarrolladora creó 'League of Legends'?",
                opciones: ["Blizzard", "Riot Games", "Valve"],
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
            },
            {
                pregunta: "¿Qué banda británica compuso el álbum 'Abbey Road'?",
                opciones: ["The Rolling Stones", "The Beatles", "Queen"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Quién es conocida como 'La Reina del Pop'?",
                opciones: ["Madonna", "Beyoncé", "Lady Gaga"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el nombre del álbum debut de Billie Eilish?",
                opciones: ["When We All Fall Asleep, Where Do We Go?", "Happier Than Ever", "Don't Smile at Me"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué instrumento es característico del jazz?",
                opciones: ["Saxofón", "Piano", "Guitarra"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué famosa cantante lanzó la canción 'Rolling in the Deep'?",
                opciones: ["Adele", "Taylor Swift", "Rihanna"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién fue apodado 'El Rey del Rock and Roll'?",
                opciones: ["Elvis Presley", "Johnny Cash", "Buddy Holly"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Qué compositor clásico compuso la 'Sinfonía No. 9'?",
                opciones: ["Beethoven", "Mozart", "Bach"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué género musical se originó en Jamaica?",
                opciones: ["Reggae", "Ska", "Dancehall"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué año se lanzó el álbum 'Thriller' de Michael Jackson?",
                opciones: ["1982", "1980", "1984"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el nombre real de Lady Gaga?",
                opciones: ["Stefani Germanotta", "Robyn Fenty", "Katheryn Hudson"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué banda tiene el álbum 'Dark Side of the Moon'?",
                opciones: ["Pink Floyd", "Led Zeppelin", "The Who"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál fue el primer gran éxito de The Rolling Stones?",
                opciones: ["(I Can't Get No) Satisfaction", "Angie", "Paint It Black"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Qué banda popularizó el movimiento 'grunge' en los años 90?",
                opciones: ["Nirvana", "Soundgarden", "Pearl Jam"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué músico compuso la banda sonora de 'El Bueno, el Malo y el Feo'?",
                opciones: ["Ennio Morricone", "Hans Zimmer", "John Williams"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién cantó la versión original de 'Hallelujah'?",
                opciones: ["Leonard Cohen", "Jeff Buckley", "Bob Dylan"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué músico tiene el récord por ganar más premios Grammy?",
                opciones: ["Georg Solti", "Quincy Jones", "Beyoncé"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué año se lanzó el álbum debut de Nirvana, 'Bleach'?",
                opciones: ["1989", "1991", "1987"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué instrumento solía tocar Louis Armstrong?",
                opciones: ["Trompeta", "Saxofón", "Trombón"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿En qué deporte se utiliza una red y un balón para marcar puntos lanzándolo al aro?",
                opciones: ["Tenis", "Baloncesto", "Voleibol"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Cuál es el país de origen del fútbol?",
                opciones: ["Brasil", "Reino Unido", "Argentina"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Cuántos jugadores tiene un equipo de fútbol en el campo al inicio del partido?",
                opciones: ["11", "12", "10"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué deporte se juega en Wimbledon?",
                opciones: ["Béisbol", "Tenis", "Golf"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué país ganó la Copa Mundial de Fútbol en 2010?",
                opciones: ["España", "Italia", "Francia"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué deporte compitió Usain Bolt?",
                opciones: ["Ciclismo", "Atletismo", "Natación"],
                respuestaCorrecta: 1,
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
            },
            {
                pregunta: "¿Cuántos puntos vale un triple en baloncesto?",
                opciones: ["2", "3", "4"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué ciclista ganó el Tour de Francia cinco veces consecutivas?",
                opciones: ["Miguel Induráin", "Lance Armstrong", "Eddy Merckx"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué deporte incluye el término 'love' para referirse al puntaje cero?",
                opciones: ["Bádminton", "Tenis", "Squash"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Quién es conocido como 'La Pulga' en el fútbol?",
                opciones: ["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr."],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿En qué año se llevaron a cabo los primeros Juegos Olímpicos modernos?",
                opciones: ["1900", "1896", "1924"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué deporte combina esquí y tiro con rifle?",
                opciones: ["Esquí de fondo", "Biatlón", "Snowboard"],
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
            },
            {
                pregunta: "¿Qué atleta tiene más medallas olímpicas de todos los tiempos?",
                opciones: ["Usain Bolt", "Michael Phelps", "Larisa Latynina"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué país ganó la primera Copa Mundial de Fútbol en 1930?",
                opciones: ["Uruguay", "Brasil", "Alemania"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué boxeador es conocido como 'El más grande'?",
                opciones: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es la duración total de un partido de rugby profesional?",
                opciones: ["80 minutos", "90 minutos", "70 minutos"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién ostenta el récord de más goles anotados en una sola Copa del Mundo?",
                opciones: ["Pele", "Just Fontaine", "Miroslav Klose"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué país ha ganado más medallas en la historia de los Juegos Olímpicos de Invierno?",
                opciones: ["Canadá", "Noruega", "Estados Unidos"],
                respuestaCorrecta: 1,
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
            },
            {
                pregunta: "¿Cuál es el planeta más cercano al Sol?",
                opciones: ["Venus", "Mercurio", "Marte"],
                respuestaCorrecta: 1,
            },
            {
                pregunta: "¿Qué gas respiramos del aire para sobrevivir?",
                opciones: ["Oxígeno", "Nitrógeno", "Hidrógeno"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
                opciones: ["Fémur", "Húmero", "Tibia"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal es conocido por su capacidad para cambiar de color?",
                opciones: ["Camaleón", "Pulpo", "Medusa"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el único satélite natural de la Tierra?",
                opciones: ["Luna", "Marte", "Europa"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cómo se llama la unidad básica de la vida?",
                opciones: ["Célula", "Tejido", "Órgano"],
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
            },
            {
                pregunta: "¿Cuál es el elemento químico representado por la letra 'O'?",
                opciones: ["Oxígeno", "Oro", "Osmio"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué científico propuso la teoría de la relatividad?",
                opciones: ["Albert Einstein", "Isaac Newton", "Niels Bohr"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué tipo de energía utiliza una planta para realizar la fotosíntesis?",
                opciones: ["Energía solar", "Energía química", "Energía térmica"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
                opciones: ["La piel", "El hígado", "El cerebro"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué gas se encuentra en mayor cantidad en la atmósfera terrestre?",
                opciones: ["Nitrógeno", "Oxígeno", "Dióxido de carbono"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal puede regenerar sus extremidades perdidas?",
                opciones: ["Estrella de mar", "Cangrejo", "Tiburón"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Qué partícula subatómica tiene carga negativa?",
                opciones: ["Electrón", "Protón", "Neutrón"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cómo se llama la fuerza que mantiene los planetas en órbita alrededor del Sol?",
                opciones: ["Gravitación", "Inercia", "Centrífuga"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué teoría describe la formación y expansión del universo?",
                opciones: ["Teoría del Big Bang", "Teoría de la Relatividad", "Teoría de Cuerdas"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué científico descubrió la penicilina?",
                opciones: ["Alexander Fleming", "Louis Pasteur", "Robert Koch"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué tipo de roca se forma a partir de lava enfriada?",
                opciones: ["Ígnea", "Sedimentaria", "Metamórfica"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué es el bosón de Higgs?",
                opciones: ["Una partícula subatómica", "Una galaxia", "Un tipo de estrella"],
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
            },
            {
                pregunta: "¿Cómo se llama el protagonista de 'Breaking Bad'?",
                opciones: ["Walter White", "Jesse Pinkman", "Hank Schrader"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué familia es el centro de la serie animada 'Los Simpson'?",
                opciones: ["Simpson", "Griffin", "Smith"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué ciudad se desarrolla 'Friends'?",
                opciones: ["Nueva York", "Chicago", "Los Ángeles"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cómo se llama el trono en 'Juego de Tronos'?",
                opciones: ["Trono de Hierro", "Trono de Acero", "Trono de Fuego"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué serie popular incluye personajes como Eleven y el Demogorgon?",
                opciones: ["Stranger Things", "The Witcher", "The Umbrella Academy"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué serie trata sobre un grupo de amigos que se conocen en un bar llamado MacLaren's?",
                opciones: ["How I Met Your Mother", "Friends", "The Big Bang Theory"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Qué actor interpreta al personaje de Tyrion Lannister en 'Juego de Tronos'?",
                opciones: ["Peter Dinklage", "Nikolaj Coster-Waldau", "Kit Harington"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cómo se llama el pueblo ficticio en el que ocurre 'Twin Peaks'?",
                opciones: ["Twin Peaks", "Riverdale", "Hawkins"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué personaje de 'The Office' es conocido por su amor por las gelatinas?",
                opciones: ["Jim Halpert", "Dwight Schrute", "Michael Scott"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué serie comienza con un profesor de química diagnosticado con cáncer?",
                opciones: ["Breaking Bad", "Better Call Saul", "Ozark"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué año se estrenó 'The Sopranos'?",
                opciones: ["1999", "2001", "1997"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué actriz protagoniza 'The Crown' como la Reina Isabel II en las temporadas 3 y 4?",
                opciones: ["Olivia Colman", "Claire Foy", "Gillian Anderson"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Cómo se llama el creador de la serie 'The Twilight Zone'?",
                opciones: ["Rod Serling", "Alfred Hitchcock", "Gene Roddenberry"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué serie tiene como tema central el narcotraficante Pablo Escobar?",
                opciones: ["Narcos", "El Patrón del Mal", "Breaking Bad"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué serie aparece el personaje Rust Cohle, interpretado por Matthew McConaughey?",
                opciones: ["True Detective", "Fargo", "Mindhunter"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué serie de ciencia ficción incluye a personajes llamados Cylons?",
                opciones: ["Battlestar Galactica", "Doctor Who", "Stargate SG-1"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué actriz ganó un Emmy por su papel de villana en 'The Handmaid's Tale'?",
                opciones: ["Ann Dowd", "Elisabeth Moss", "Yvonne Strahovski"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué serie aparecen los personajes Dana Scully y Fox Mulder?",
                opciones: ["The X-Files", "Fringe", "Supernatural"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Quién descubrió América en 1492?",
                opciones: ["Cristóbal Colón", "Américo Vespucio", "Fernando de Magallanes"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué imperio construyó el Coliseo de Roma?",
                opciones: ["Imperio Romano", "Imperio Griego", "Imperio Otomano"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué año terminó la Segunda Guerra Mundial?",
                opciones: ["1945", "1939", "1950"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué faraón egipcio es conocido por su tumba intacta?",
                opciones: ["Tutankamón", "Ramsés II", "Cleopatra"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
                opciones: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué muro fue derribado en 1989?",
                opciones: ["Muro de Berlín", "Muro de Adriano", "Muro de China"],
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
            },
            {
                pregunta: "¿Cuál fue la capital del Imperio Azteca?",
                opciones: ["Tenochtitlán", "Teotihuacán", "Chichén Itzá"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién lideró la independencia de la India en 1947?",
                opciones: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
                opciones: ["1776", "1783", "1750"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué dinastía construyó la Gran Muralla China?",
                opciones: ["Dinastía Qin", "Dinastía Han", "Dinastía Tang"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién escribió 'El Príncipe'?",
                opciones: ["Nicolás Maquiavelo", "Platón", "Aristóteles"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué revolución comenzó con la toma de la Bastilla?",
                opciones: ["Revolución Francesa", "Revolución Rusa", "Revolución Americana"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
                opciones: ["Tratado de Versalles", "Tratado de Utrecht", "Tratado de París"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién fue el último emperador del Imperio Romano de Occidente?",
                opciones: ["Rómulo Augústulo", "Julio César", "Constantino"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué país fue gobernado por los zares hasta 1917?",
                opciones: ["Rusia", "Alemania", "Austria"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué batalla terminó con la derrota de Napoleón Bonaparte?",
                opciones: ["Batalla de Waterloo", "Batalla de Trafalgar", "Batalla de Borodino"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Quién pintó el famoso mural 'Guernica'?",
                opciones: ["Pablo Picasso", "Salvador Dalí", "Joan Miró"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué filósofo griego fue maestro de Alejandro Magno?",
                opciones: ["Aristóteles", "Sócrates", "Platón"],
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
            },
            {
                pregunta: "¿Cuál es el mamífero más grande del mundo?",
                opciones: ["Ballena azul", "Elefante africano", "Tiburón ballena"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal es conocido como 'el rey de la selva'?",
                opciones: ["León", "Tigre", "Jaguar"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué tipo de animal es un pingüino?",
                opciones: ["Ave", "Pez", "Mamífero"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal tiene la lengua más larga en proporción a su cuerpo?",
                opciones: ["Camaleón", "Serpiente", "Rana"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cómo se llama el proceso por el cual una oruga se convierte en mariposa?",
                opciones: ["Metamorfosis", "Muda", "Evolución"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué ave no puede volar pero corre muy rápido?",
                opciones: ["Avestruz", "Kiwi", "Pavo"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Qué mamífero puede volar?",
                opciones: ["Murciélago", "Ardilla voladora", "Perezoso"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cuál es el único continente donde no viven osos polares?",
                opciones: ["Antártida", "Asia", "América del Norte"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal es famoso por jugar muerto como mecanismo de defensa?",
                opciones: ["Zarigüeya", "Armadillo", "Erizo"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué tipo de animal es un calamar?",
                opciones: ["Molusco", "Pez", "Anélido"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal puede dormir de pie?",
                opciones: ["Caballo", "Jirafa", "Vaca"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué pez tiene la capacidad de inflarse como defensa?",
                opciones: ["Pez globo", "Pez león", "Caballito de mar"],
                respuestaCorrecta: 0,
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
            },
            {
                pregunta: "¿Qué animal tiene el corazón más grande en proporción a su tamaño?",
                opciones: ["Colibrí", "Elefante", "Ballena azul"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué especie de tortuga puede vivir más de 150 años?",
                opciones: ["Tortuga gigante de Galápagos", "Tortuga verde", "Tortuga laúd"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal produce seda?",
                opciones: ["Gusano de seda", "Araña", "Hormiga"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué tipo de tiburón es el más grande?",
                opciones: ["Tiburón ballena", "Tiburón blanco", "Tiburón martillo"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Cómo se llaman los dientes de los elefantes?",
                opciones: ["Colmillos", "Molares", "Caninos"],
                respuestaCorrecta: 0,
            },
            {
                pregunta: "¿Qué animal es conocido por ser el más venenoso del mundo?",
                opciones: ["Rana dardo dorada", "Medusa caja", "Serpiente taipán"],
                respuestaCorrecta: 0,
            }
        ]
    }


};


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
    }, 1100);
}

// Terminar juego
function terminarJuego() {
    clearInterval(temporizador);
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








