{const getMoveName = function(argMoveId){
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
const playGame = function(playerInput){
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const argProbability = Math.floor(Math.random()*100+1);
    let argComputerMove = getMoveName(randomNumber);
    let argPlayerMove = getMoveName(playerInput);
    //CONSOLE LOG BEFORE PROBABILITY CHANGES
    console.log('computer : ' + argComputerMove);
    console.log('player : ' +argPlayerMove);
    console.log(argProbability);
    //Changed statement based on Probability
    if(argProbability <= 75){
        if(argPlayerMove == 'rock'){
            argComputerMove ='scissors';
        }
        else if(argPlayerMove == 'paper'){
            argComputerMove = 'rock';
        }
        else if(argPlayerMove == 'scissors')
        {
            argComputerMove = 'paper';
        }
    }
    console.log('Data after probability');
    console.log('computer : ' + argComputerMove);
    console.log('player : ' +argPlayerMove);
    console.log('--------------------------');
    displayResult(argComputerMove, argPlayerMove);
}
// Function to compare outputs
let playerScore = 0;
let computerScore  = 0;
const displayResult = function(argComputerMove, argPlayerMove){
    document.getElementById('pc').innerHTML = argPlayerMove;
    document.getElementById('ch').innerHTML = argComputerMove;
    if((argComputerMove == 'rock' && argPlayerMove == 'paper') || (argComputerMove == 'paper' && argPlayerMove == 'scissors') || (argComputerMove == 'scissors' && argPlayerMove == 'rock')){
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = "You win this round.";
    }
    else if((argComputerMove == 'rock' && argPlayerMove =='rock') || (argComputerMove == 'paper' && argPlayerMove =='paper') || (argComputerMove == 'scissors' && argPlayerMove =='scissors')){
        document.getElementById('result').innerHTML = "It's a draw !";
     }
    else if(argPlayerMove == 'unknown move'){
        printMessage('<h1>Unknown player move</h1>');
    }
    else {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = "Computer win this round.";
    }
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('computer-score').innerHTML = computerScore;
}
// FUNCTION TO RESET SCORE
const rest = function(){
    clearMessages();
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('computer-score').innerHTML = computerScore;
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
}