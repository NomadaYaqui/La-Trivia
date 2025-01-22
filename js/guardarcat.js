function iniciarJuego() {
    // 1. Obtener valores seleccionados
    const dificultad = document.getElementById("selectordificultad").value;
    const tiempo = document.getElementById("selectortiempo").value;
    const categoria = sessionStorage.getItem("categoriaNombre");

    // 2. Validar categoría seleccionada
    if (!categoria) {
        alert("¡Selecciona una categoría primero! 😊");
        return; // Detiene la ejecución si no hay categoría
    }

    // 3. Guardar en sessionStorage
    sessionStorage.setItem("dificultad", dificultad);
    sessionStorage.setItem("tiempo", tiempo);

    // 4. Redirigir
    window.location.href = "contenido.html";
}