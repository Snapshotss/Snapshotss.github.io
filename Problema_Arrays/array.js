"use strict";
(() => {
    const nombre = ['Hugo', 'Paco', 'Luis', 'Pedro', 'Hector'];
    const edad = [35, 50, 40, 18, 30];
    // Índice del menor y mayor usando Math y funciones flecha
    const menor = edad.indexOf(Math.min(...edad));
    const mayor = edad.indexOf(Math.max(...edad));
    console.log(`${nombre[menor]} es el menor con ${edad[menor]} años.`);
    console.log(`${nombre[mayor]} es el mayor con ${edad[mayor]} años.`);
})();
