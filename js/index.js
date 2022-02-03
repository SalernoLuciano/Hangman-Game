// Tomo el boton HTML del DOM
const btnStart = document.querySelector( "#start-game" );

/**
 * Al hacer click se dibujara el tablero con drawBoard ( definida en btnStart.js)
 */
btnStart.addEventListener( "click", () => {
    drawBoard(); 
} );


