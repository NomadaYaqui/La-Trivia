function cargarCategoria() {
    // Obtener categoría guardada
    const imagen = sessionStorage.getItem("categoriaImagen");
    const nombre = sessionStorage.getItem("categoriaNombre");

    // Mostrar en la interfaz
    if (imagen && nombre) {
        document.getElementById("categoriaImagen").src = imagen;
        document.getElementById("categoriaNombre").textContent = nombre;
    } else {
        alert("¡Selecciona una categoría primero! 😊");
        window.location.href = "categorias.html";
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