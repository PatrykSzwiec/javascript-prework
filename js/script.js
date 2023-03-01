printMessage("<h1>ROCK PAPER SCISSORS GAME</h1>");
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The drawn number is : ' + randomNumber);

let computerMove = 'unknown move';
// COMPUTER MOVE SCRIPT ---------------------------------------------------------
if(randomNumber == 1){
  computerMove = 'rock';
}
  else if (randomNumber == 2){
    computerMove = 'paper';
  }
  else if (randomNumber == 3){
    computerMove = "scissors";
  }

console.log('Computer move is : ' + computerMove);
printMessage('Computer move is : ' + computerMove);
// PLAYER MOVE SCRIPT -----------------------------------------------------------
let playerInput = prompt('Make your move ! \n 1: Rock | 2: Paper | 3: Scissors.');

console.log('Player choose : ' + playerInput);

let playerMove = 'unknown move';

if(playerInput == '1'){
  playerMove = 'rock';
}
    else if (playerInput == '2'){
        playerMove= 'paper';
    }
    else if (playerInput == '3'){
        playerMove= 'scissors';
    }
console.log('Player move is : ' + playerMove);
printMessage('Player move is : ' + playerMove);
// SETTLEMENT OF THE RESULT
// computerMove is rock
if ( computerMove == 'rock' && playerMove == 'paper'){
    console.log('Player win this round.');
    printMessage('<h1>Player win this round.</h1>');
}
    else if ( computerMove == 'rock' && playerMove == 'rock'){
        console.log('Its a draw!');
        printMessage('<h1>Its a draw!</h1>');
    } 
    else if ( computerMove == 'rock' && playerMove == 'scissors'){
        console.log('Computer win this round.');
        printMessage('<h1>Computer win this round.</h1>');
    }
// computerMove is paper
    else if ( computerMove == 'paper' && playerMove == 'paper'){
        console.log('Its a draw!');
        printMessage('<h1>Its a draw!</h1>');
    }
    else if ( computerMove == 'paper' && playerMove == 'rock'){
        console.log('Computer win this round.');
        printMessage('<h1>Computer win this round.</h1>');
    } 
    else if ( computerMove == 'paper' && playerMove == 'scissors'){
        console.log('Player win this round.');
        printMessage('<h1>Player win round.</h1>');
    }
// computerMove is scissors
    else if ( computerMove == 'scissors' && playerMove == 'paper'){
        console.log('Computer win this round.');
        printMessage('<h1>Computer win this round.</h1>');
    }
    else if ( computerMove == 'scissors' && playerMove == 'rock'){
        console.log('Player win this round.');
        printMessage('<h1>Player win this round.</h1>');
    } 
    else if ( computerMove == 'scissors' && playerMove == 'scissors'){
        console.log('Its a draw!');
        printMessage('<h1>Its a draw!</h1>');
    }
// playerMove is unknown move
    else if (computerMove == 'rock' || computerMove == 'paper' || computerMove == 'scissors' && playerMove == 'unknown move'){
        console.log("Player move isn't correct !!!");
        printMessage("<h1>Player move isn't correct !!!</h1>");
    }