function guardarCategoria(event) {
    event.preventDefault();
    const categoriaElement = event.currentTarget;
    const imagen = categoriaElement.querySelector('img').getAttribute('src');
    const nombre = categoriaElement.querySelector('span').textContent;
    sessionStorage.setItem('categoriaImagen', imagen);
    sessionStorage.setItem('categoriaNombre', nombre);
    setTimeout(function() {
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