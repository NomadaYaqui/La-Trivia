function guardarCategoria(event) {
    event.preventDefault();
    const categoriaElement = event.currentTarget;
    const imagen = categoriaElement.querySelector('img').getAttribute('src');
    const nombre = categoriaElement.querySelector('span').textContent;
    sessionStorage.setItem('categoriaImagen', imagen);
    sessionStorage.setItem('categoriaNombre', nombre);
    setTimeout(function () {
        window.location.href = "trivia.html";
    }, 1);
}

function cargarCategoria() {
    const imagen = sessionStorage.getItem('categoriaImagen');
    const nombre = sessionStorage.getItem('categoriaNombre');
    if (imagen && nombre) {
        document.getElementById('categoriaImagen').src = imagen;
        document.getElementById('categoriaNombre').textContent = nombre;

        // Configurar el botón para redirigir según la categoría
        const botonIniciar = document.querySelector('.button-iniciar-juego');
        botonIniciar.addEventListener('click', function () {
            // Cargar las preguntas desde el archivo JSON
            fetch('../html/trivias.json')
                .then(response => response.json())
                .then(data => {
                    if (data[nombre.toLowerCase()]) {
                        const dificultad = document.getElementById('selectordificultad').value.toLowerCase();
                        mostrarTrivia(data[nombre.toLowerCase()].niveles[dificultad]);
                    } else {
                        console.error("Categoría no encontrada en el JSON");
                    }
                })
                .catch(error => console.error('Error al cargar el JSON:', error));
        });
    } else {
        console.error('No se encontraron datos en sessionStorage');
        document.getElementById('categoriaNombre').textContent = "Selecciona tu categoría 😁";
    }
}

function mostrarTrivia(preguntas) {
    const contenedor = document.getElementById('contenidoTrivia');
    contenedor.innerHTML = ""; // Limpiar contenido previo

    // Mostrar preguntas dinámicamente
    preguntas.forEach((pregunta, index) => {
        const preguntaElement = document.createElement('div');
        preguntaElement.classList.add('pregunta-item');
        preguntaElement.innerHTML = `
            <h3>${index + 1}. ${pregunta.pregunta}</h3>
            <ul>
                ${pregunta.opciones.map((opcion, i) => `<li data-respuesta="${pregunta.respuesta}" data-opcion="${opcion}" class="opcion">${opcion}</li>`).join('')}
            </ul>
        `;
        contenedor.appendChild(preguntaElement);
    });

    // Manejar clics en las opciones
    document.querySelectorAll('.opcion').forEach(item => {
        item.addEventListener('click', function () {
            const respuestaCorrecta = item.getAttribute('data-respuesta');
            const opcionSeleccionada = item.getAttribute('data-opcion');

            if (opcionSeleccionada === respuestaCorrecta) {
                item.style.backgroundColor = "#4CAF50"; // Respuesta correcta
            } else {
                item.style.backgroundColor = "#f44336"; // Respuesta incorrecta
            }
            // Desactivar las demás opciones para esa pregunta
            item.parentElement.querySelectorAll('li').forEach(li => li.style.pointerEvents = 'none');
        });
    });
}
