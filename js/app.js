document.addEventListener('DOMContentLoaded', function () { //una vez que cargue el html ejecutamos una function
    eventListeners();
});
//una vez que cargue el html ejecutamos una function
function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion-principal');

    navegacion.classList.toggle('mostrar');
}
function actualizarFecha() {
    var fecha = new Date();
    var opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    document.getElementById('fecha').textContent = fechaFormateada;
}

actualizarFecha();

setInterval(actualizarFecha, 1000 * 60 * 60 * 24); // Actualiza la fecha cada día.