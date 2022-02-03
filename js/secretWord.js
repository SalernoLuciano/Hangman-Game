let inputRegister = [];
let correctLetters = [];
let incorrectLetters = [];
let inputLetter;

// Lista de Palabras iniciales.
// AQUI TAMBIEN SE GUARDARAN LAS PALABRAS QUE AGREGUE EL USUARIO
let dictionary = [ "ACUARIO", "BIFE", "COLMENA", "DADO", "ECLIPSE", "FLEXIBLE", "GLUCEMIA", "HUMILDE", "IMPERIO", "JURAR", "LABERINTO", "MURO", "NOVATO", "OBTUSO", "PIONONO", "QUIETO", "REY", "SASTRE", "TRAGEDIA", "UPAR", "VAGABUNDO", "WINDSURF", "EXPRIMIR", "BYTE", "ZANGUANGO"];

// Asignacion de la palabra elegida aleatoriamente
let randomWord = selectRandomWord();
console.log(randomWord);

// Registro tecla presionada del documento
document.addEventListener("keydown", (evento) => {
    
    /**
     * Guardo la letra presionada, eliminando los caracteres especiales y   * numeros de la entrada ingresada, Luego pasa la palabra a mayusculas
     */
    inputLetter = evento.key.normalize("NFD").replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))([\u0300-\u036f]|[^a-zA-Z])/g, '').toUpperCase();
    validateLetter();
    console.log(`Letras correctas: ${correctLetters}`);
    console.log(`Letras incorrectas: ${incorrectLetters}`);
});

/**
 *  Guardo el historial de letra apretadas en un array solo si es una letra mayuscula
 *  Ademas tengo en cuenta si la letra es una Ñ tengo que testearla
 *  Y tambien restrinjo el largo del input para que no tome 'key' de los tildes ( "DEAD" ) por ejemplo
 */
function validateLetter(){
    if(/[A-Z]|Ñ/.test(inputLetter) && inputLetter.length <= 2){
        inputRegister.push(inputLetter);

        // Chequeo si la letra presionada esta en la palabra secreta
        if(randomWord.search(inputLetter) != -1 ){

           saveRightLetter();

        }else{

           saveWrongLetter();

        }
    }
}

/**
* Si la letra Está en la palabra y no se ingreso antes 
* guardo la letra elegida en una lista de letras correctas
*/
function saveRightLetter(){
    if( !correctLetters.includes(inputLetter))  correctLetters.push(inputLetter);
}

/**
* Si la letra NO Está en la palabra y no se ingreso antes 
* guardo la letra elegida en una lista de letras incorrectas
*/
function saveWrongLetter(){
    if(!incorrectLetters.includes(inputLetter))  incorrectLetters.push(inputLetter);
}

/**
 * 
 * @returns Una palabra aleatoria de la lista de palabras
 */
 function selectRandomWord(){
    // Eleccion aleatoria del indice de las palabras almacenadas en la lista de palabras
    let randomIndex = Math.floor(Math.random()*dictionary.length);
    return dictionary[randomIndex];
}