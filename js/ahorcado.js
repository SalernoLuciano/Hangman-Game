let inputRegister = [];
let correctLetters = [];
let incorrectLetters = [];
let inputLetter;
const inputAddWord = document.querySelector("#input-add-word");
const btnAddWord  =document.querySelector("#new-word");
let randomWord;
// let storage = localStorage;

let dictionary = [ "ACUARIO", "BIFE", "COLMENA", "DADO", "ECLIPSE", "FLEXIBLE", "GLUCEMIA", "HUMILDE", "IMPERIO", "JURAR", "LABERINTO", "MURO", "NOVATO", "OBTUSO", "PIONONO", "QUIETO", "REY", "SASTRE", "TRAGEDIA", "UPAR", "VAGABUNDO", "WINDSURF", "EXPRIMIR", "BYTE", "ZANGUANGO"];
// storage.setItem("words", dictionary);

btnAddWord.addEventListener( "click", () => {
    if (inputAddWord.value.length > 0 && !dictionary.includes(inputAddWord.value.normalize( "NFD" ).replace( /([\u0300-\u036f]|[^a-zA-Z])/g, '' ).toUpperCase())){
        dictionary.push(inputAddWord.value.normalize( "NFD" ).replace( /([\u0300-\u036f]|[^a-zA-Z])/g, '' ).toUpperCase())
        // storage.setItem( "words", dictionary);
        console.log(storage);
    } else {
        alert("That word already exists or there is no input");
    }
})

function validateLetter( inputLetter ){
    if( /[A-Z]|Ñ/.test( inputLetter ) && inputLetter.length <= 2 ){
        inputRegister.push( inputLetter );
        if( randomWord.search( inputLetter ) != -1 ){
            console.log(randomWord);
            for(let i=0; i < randomWord.length; i++){
                if(randomWord[i] == inputLetter){
                    drawLetter(randomWord[i], i);
                }
            }
           saveRightLetter( inputLetter );

        }else{
           saveWrongLetter( inputLetter );
           brush.fillText(incorrectLetters, 700, 200);
           // Agregar partes del cuerpo.
           lives--;
        }
    }
}

function saveRightLetter( inputLetter ){
    if( !correctLetters.includes( inputLetter ) ) correctLetters.push( inputLetter );
}

function saveWrongLetter( inputLetter ){
    if( !incorrectLetters.includes( inputLetter ) ) incorrectLetters.push( inputLetter );
}

 function selectRandomWord( dictionary ){
    let randomIndex = Math.floor( Math.random() * dictionary.length );
    return dictionary[ randomIndex ];
}