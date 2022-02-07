let points = 0;
let lives = 7;
let canvas = document.querySelector( "canvas" );
const brush = canvas.getContext( "2d" );
const btnStart = document.querySelector( "#start-game" );

btnStart.addEventListener( "click", () => {
    correctLetters = [];
    incorrectLetters = [];
    randomWord = selectRandomWord( dictionary );
    randomWord.split('');
    console.log(randomWord);
    drawBoard();
    document.addEventListener( "keydown", ( evento ) => {
        inputLetter = evento.key.normalize( "NFD" ).replace( /([\u0300-\u036f]|[^a-zA-Z])/g, '' ).toUpperCase();
        validateLetter( inputLetter );
    });
} );

function drawBoard () {
    canvas.style = 'display: inline';
    brush.clearRect(0, 0, canvas.width, canvas.height);
    brush.font = "20px Roboto";
    brush.fillStyle = "white";
    brush.fillText( `Points: ${points}`, 5, 20 );
    brush.fillText( `Lives: ${lives}`, 100, 20 );
    createGallow( brush );
    drawTextLines( randomWord );
}

function createGallow( brush ){
    brush.lineWidth = 5;
    brush.strokeStyle = "white";
    brush.fillRect( 50,550, 200, 50 );
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
    brush.closePath();
}

function drawTextLines( word ){
    let inicioTxt = 550;
    for ( let i = 0; i < word.length; i++){
        brush.moveTo( inicioTxt, 550 );
        brush.lineTo( inicioTxt+30,550 );
        inicioTxt += 50;
    }
    brush.stroke();
}

function drawLetter( letter, index ){
    brush.font = "30px Roboto";
    brush.fillText(letter, 550 + ( index*50 ), 530);
}