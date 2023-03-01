printMessage("<h1>ROCK PAPER SCISSORS GAME</h1>");
//Computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('The drawn number is : ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);
//Player move
let playerInput = prompt('Make your move ! \n 1: Rock | 2: Paper | 3: Scissors.');
console.log('Player number is: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'rock';
    }
    else if (argMoveId == 2){
        return 'paper';
    }
    else if (argMoveId == 3){
        return 'scissors';
    }
    else {
        return 'unknown move';
    }
}
console.log(argComputerMove);
console.log(argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
    console.log('wywołano displayResult');
    printMessage('<b>Computer</b> choose ' + argComputerMove + ', and <b>player</b> choose ' + argPlayerMove);
    if( argComputerMove == 'rock' && argPlayerMove == 'paper' || argComputerMove == 'paper' && argPlayerMove == 'scissors' || argComputerMove == 'scissors' && argPlayerMove == 'rock'){
        printMessage('<h1>Player win this round.</h1>');
    }
    else if( argComputerMove == 'rock' && argPlayerMove =='rock'){
        printMessage("<h1>It's a draw !</h1>");
    }
    else if(argPlayerMove == 'unknown move'){
        printMessage('<h1>Unknown player move</h1>');
    }
    else {
        printMessage('<h1>Computer win this round.</h1>');
    }
}
displayResult(argComputerMove, argPlayerMove);
