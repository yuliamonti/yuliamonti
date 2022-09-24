document.addEventListener('DOMContentLoaded', function() { //una vez que cargue el html ejecutamos una function
    eventListeners ();
});
//una vez que cargue el html ejecutamos una function
function eventListeners () {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive () {
    const navegacion = document.querySelector('.navegacion-principal');

    navegacion.classList.toggle('mostrar');
}