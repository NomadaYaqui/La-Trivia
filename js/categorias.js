function guardarCategoria(event) {
    event.preventDefault();
    const categoriaElement = event.currentTarget;

    // Obtener datos desde atributos data
    const imagen = categoriaElement.dataset.imagen;
    const nombre = categoriaElement.dataset.nombre;

    // Validar datos
    if (!imagen || !nombre) {
        alert("Error: Categoría no válida");
        return;
    }

    // Guardar en sessionStorage
    sessionStorage.setItem("categoriaImagen", imagen);
    sessionStorage.setItem("categoriaNombre", nombre);

    // Redirigir a trivia.html
    window.location.href = "trivia.html";
}