const btnStart = document.querySelector("#start-game");
const btnAddWord  =document.querySelector("#new-word");
const inputNewWord = document.querySelector("#input-add-word");
const canvas = document.querySelector( "canvas" );
const brush = canvas.getContext("2d");

let dictionary = [ "ACUARIO", "BIFE", "COLMENA", "DADO", "ECLIPSE", "FLEXIBLE", "GLUCEMIA", "HUMILDE", "IMPERIO", "JURAR", "LABERINTO", "MURO", "NOVATO", "OBTUSO", "PIONONO", "QUIETO", "REY", "SASTRE", "TRAGEDIA", "UPAR", "VAGABUNDO", "WINDSURF", "EXPRIMIR", "BYTE", "ZANGUANGO"];

let randomWord;
let inputLetter;
let lives = 7;

btnStart.addEventListener("click", startGame);

btnAddWord.addEventListener("click", addNewWord);

function startGame(){
    randomWord = selectRandomWord().split("");
}

function selectRandomWord(){
    return dictionary[ Math.floor( Math.random() * dictionary.length ) ];
}

function addNewWord(){
    let input = inputNewWord.value;
    console.log(input);
}