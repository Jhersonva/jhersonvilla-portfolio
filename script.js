// Mostrar u ocultar el menú en dispositivos móviles
function mostrarOcultarMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show');
}
function seleccionar() {
    const nav = document.getElementById('nav');
    nav.classList.remove('show');
}

//Actualizacion de año actual
document.getElementById("year").textContent = new Date().getFullYear();
