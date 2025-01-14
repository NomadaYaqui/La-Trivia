document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("categoria");

    // Mostrar solo el contenido seleccionado
    document.querySelectorAll(".categoria-contenido").forEach(element => {
        element.style.display = element.id === categoria ? "block" : "none";
    });

    if (!categoria) {
        alert("Categoría no encontrada.");
        window.location.href = "categorias.html";
    }
});
