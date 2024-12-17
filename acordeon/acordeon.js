'use strict'

// 1. seleccionar elemts del acordeon
const items = document.querySelectorAll('.acordeon-item');
const headers = document.querySelectorAll('.acordeon-header');

// 2. Cuando haga CLICK en header, 
    // quitar la clase activo de TODOS los bloques
    // Después añadir la clase activo al item con la POSICION del header

// Añadir evento de clic a cada encabezado y recorrerlos todos
headers.forEach((header, index) => {
    // Asignando un CLICK a cada header
    header.addEventListener('click', () => {
        // Si el bloque ya está abierto, cerrarlo
        const isActive = items[index].classList.contains('active');
        
        // Cerrar todos los bloques
        items.forEach(item => item.classList.remove('active'));
        
        // Si el bloque no estaba abierto, lo abro
        if (!isActive) {
            items[index].classList.add('active');
        }
    });
});

