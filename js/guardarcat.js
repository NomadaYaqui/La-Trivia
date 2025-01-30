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
    } else {
        console.error('No se encontraron datos en sessionStorage');
        document.getElementById('categoriaNombre').textContent = "Selecciona tu categoría 😁";
    }
}


function iniciarJuego() {
    // Obtener valores seleccionados
    const dificultad = document.getElementById("selectordificultad").value;
    const tiempo = document.getElementById("selectortiempo").value;
    const categoria = sessionStorage.getItem("categoriaNombre");

    // Validar
    if (!dificultad || !tiempo || !categoria) {
        alert("¡Completa todas las opciones! 😊");
        return;
    }

    // Guardar en sessionStorage
    sessionStorage.setItem("dificultad", dificultad);
    sessionStorage.setItem("tiempo", tiempo);

    // Redirigir a contenido.html
    window.location.href = "contenido.html";
}