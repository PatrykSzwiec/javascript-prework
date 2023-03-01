function playGame(argX){
    clearMessages();
    let playerInput = argX;
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('The drawn number is : ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
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
        if((argComputerMove == 'rock' && argPlayerMove == 'paper') || (argComputerMove == 'paper' && argPlayerMove == 'scissors') || (argComputerMove == 'scissors' && argPlayerMove == 'rock')){
            printMessage('<h1>Player win this round.</h1>');
        }
        else if((argComputerMove == 'rock' && argPlayerMove =='rock') || (argComputerMove == 'paper' && argPlayerMove =='paper') || (argComputerMove == 'scissors' && argPlayerMove =='scissors')){
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
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});