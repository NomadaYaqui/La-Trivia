function mostrarContenido(categoria) {
    // Ocultar todos los contenidos
    const contenidos = document.querySelectorAll('.categoria-contenido');
    contenidos.forEach(contenido => {
        contenido.style.display = 'none';
    });

    // Mostrar el contenido de la categoría seleccionada
    const contenidoSeleccionado = document.getElementById(categoria);
    if (contenidoSeleccionado) {
        contenidoSeleccionado.style.display = 'block';
    }
}
