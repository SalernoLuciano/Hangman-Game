let points = 0;
let lives = 7;
let canvas = document.querySelector( "canvas" );
let brush = canvas.getContext( "2d" );
let inicioTxt = 550;

/**
 * Crea el tablero completo en el canvas. La figura de la Horca, las lineas de las letras, los puntos y las vidas
 */
function drawBoard () {
    brush.font = "20px Roboto";
    brush.fillStyle = "white";
    brush.fillText( `Points: ${points}`, 5, 20 );
    brush.fillText( `Lives: ${lives}`, 100, 20 );
    createGallow();
    drawTextLines( randomWord );
}

/**
 * Creara la figura de la Horca
 */
function createGallow(){
    brush.lineWidth = 5;
    brush.strokeStyle = "white";
    brush.fillRect( 50,550, 200, 50 );
    brush.stroke();
    brush.beginPath();
    brush.moveTo( 150,550 );
    brush.lineTo( 150,550 );
    brush.lineTo( 150,100 );
    brush.lineTo( 450,100 );
    brush.lineTo( 450,200 );
    brush.moveTo( 400,200 );
    // En esta linea tengo las coordenadas de donde debo empezar a dibujar el cuerpo del muñeco
    brush.lineTo( 500,200 );
    brush.stroke();
    
}

/**
 * Dibujara la cantidad de lineas correspondientes al 'word.length'
 * @param {string} word Es la palabra elegida para el juego. Se usara para dibujar las lineas de la palabra a adivinar
 */
function drawTextLines( word ){
    for ( let i = 0; i < word.length; i++){
        brush.moveTo( inicioTxt, 550 );
        brush.lineTo( inicioTxt+30,550 );
        inicioTxt += 50;

    }
    brush.stroke();
}