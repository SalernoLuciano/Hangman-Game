const btnStart = document.querySelector("#start-game");
const btnAddWord  =document.querySelector("#new-word");
const inputNewWord = document.querySelector("#input-add-word");
const canvas = document.querySelector( "canvas" );
const brush = canvas.getContext("2d");

let randomWord;
let inputLetter;
let lives = 7;

btnStart.addEventListener("click", startGame());

btnAddWord.addEventListener("click", addNewWord());