let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
  else if (randomNumber == 2){
    computerMove = 'papier';
  }
  else if (randomNumber == 3){
    computerMove = "nożyce";
  }

console.log('Ruch komputera to: ' + computerMove);
printMessage('Ruch komputera to: ' + computerMove);