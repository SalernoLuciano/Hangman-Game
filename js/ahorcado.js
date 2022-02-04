let inputRegister = [];
let correctLetters = [];
let incorrectLetters = [];
let inputLetter;

let dictionary = [ "ACUARIO", "BIFE", "COLMENA", "DADO", "ECLIPSE", "FLEXIBLE", "GLUCEMIA", "HUMILDE", "IMPERIO", "JURAR", "LABERINTO", "MURO", "NOVATO", "OBTUSO", "PIONONO", "QUIETO", "REY", "SASTRE", "TRAGEDIA", "UPAR", "VAGABUNDO", "WINDSURF", "EXPRIMIR", "BYTE", "ZANGUANGO"];

let randomWord = selectRandomWord( dictionary );
console.log( randomWord );

// Registro tecla presionada del documento
document.addEventListener( "keydown", ( evento ) => {
    
    
    inputLetter = evento.key.normalize( "NFD" ).replace( /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))([\u0300-\u036f]|[^a-zA-Z])/g, '' ).toUpperCase();
    validateLetter( inputLetter );
    console.log( `Letras correctas: ${correctLetters}` );
    console.log( `Letras incorrectas: ${incorrectLetters}` );
});

/**
 *  Guardo el historial de letra apretadas en un array solo si es una letra mayuscula
 *  Ademas tengo en cuenta si la letra es una Ñ tengo que testearla
 *  Y tambien restrinjo el largo del input para que no tome 'key' de los tildes ( "DEAD" ) por ejemplo
 *  
 * @param {String} inputLetter => Es un unico caracter
 */
function validateLetter( inputLetter ){
    if( /[A-Z]|Ñ/.test( inputLetter ) && inputLetter.length <= 2 ){
        inputRegister.push( inputLetter );

        // Chequeo si la letra presionada esta en la palabra secreta
        if( randomWord.search( inputLetter ) != -1 ){

           saveRightLetter( inputLetter );
           // Informar letras correctas en canvas
           // Dibujar la letra la cantidadde veces que aparezca en la palabra, en el canvas

        }else{

           saveWrongLetter( inputLetter);
           // informar letras incorrectas en canvas

        }
    }
}

/**
* Si la letra Está en la palabra y no se ingreso antes 
* guardo la letra elegida en una lista de letras correctas
*
* @param {String} inputLetter => Es un unico caracter
*/
function saveRightLetter( inputLetter ){
    if( !correctLetters.includes( inputLetter ) ) correctLetters.push( inputLetter );
}

/**
* Si la letra NO Está en la palabra y no se ingreso antes 
* guardo la letra elegida en una lista de letras incorrectas
*
* @param {String} inputLetter => Es un unico caracter
*/
function saveWrongLetter( inputLetter ){
    if( !incorrectLetters.includes( inputLetter ) ) incorrectLetters.push( inputLetter );
}

/**
 * @param {Array} dictionary => Array de Strings
 * @returns {String} => Una palabra aleatoria de la lista de palabras
 */
 function selectRandomWord( dictionary ){
    let randomIndex = Math.floor( Math.random() * dictionary.length );
    return dictionary[ randomIndex ];
}