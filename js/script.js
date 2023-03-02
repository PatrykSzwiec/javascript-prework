var playerScore = 0 ;
var computerScore  = 0;
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
// Function to get moves
function playGame(argX){
    clearMessages();
    let playerInput = argX;
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let argComputerMove = getMoveName(randomNumber);
    let argPlayerMove = getMoveName(playerInput);
    console.log('computer : ' + argComputerMove);
    console.log('player : ' +argPlayerMove);
    displayResult(argComputerMove, argPlayerMove);
}
// Function to compare outputs
function displayResult(argComputerMove, argPlayerMove){
    document.getElementById('pc').innerHTML = "You : "  + argPlayerMove;
    document.getElementById('ch').innerHTML = "Computer : "  + argComputerMove;
    if((argComputerMove == 'rock' && argPlayerMove == 'paper') || (argComputerMove == 'paper' && argPlayerMove == 'scissors') || (argComputerMove == 'scissors' && argPlayerMove == 'rock')){
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = "Winner: <br> You win this round.";
    }
    else if((argComputerMove == 'rock' && argPlayerMove =='rock') || (argComputerMove == 'paper' && argPlayerMove =='paper') || (argComputerMove == 'scissors' && argPlayerMove =='scissors')){
        document.getElementById('result').innerHTML = "Winner: <br> It's a draw !";
     }
    else if(argPlayerMove == 'unknown move'){
        printMessage('<h1>Unknown player move</h1>');
    }
    else {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = "Winner: <br> Computer win this round.";
    }
    document.getElementById('player-score').innerHTML = "You : "  + playerScore;
    document.getElementById('computer-score').innerHTML = "Computer : "  + computerScore;
}
// FUNCTION TO RESET SCORE
function rest(){
    clearMessages();
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerHTML = "You : "  + playerScore;
    document.getElementById('computer-score').innerHTML = "Computer : "  + computerScore;
}
// END OF FUNCTION
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
// TEST AREA //
function rand50() {
    return Math.floor(Math.random() * 10) & 1;
}
function rand75() {
    return rand50() | rand50();
}
for (let i = 0; i < 10; i++)
    document.write(rand75());
    /////////////////////////////////////
 