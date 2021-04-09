function computerPlay(){
  compChoice=Math.floor(Math.random()*3)
  if(compChoice==0){
    compChoice=`Rock`
  }
  else if(compChoice==1){
    compChoice=`Paper`
  }
  else{
    compChoice=`Scissors`
  }
  return compChoice;
}

function playRound(playerSelection, computerSelection){
  if ((playerSelection.toLowerCase()==`rock` && computerSelection.toLowerCase()==`scissors`) || (playerSelection.toLowerCase()==`paper` && computerSelection.toLowerCase()==`rock`) || (playerSelection.toLowerCase()==`scissors` && computerSelection.toLowerCase()==`paper`)){
    win = win + 1
    return `    Your choice is: ${playerSelection}
    Computer's choice is: ${computerSelection}
    aaaaaand......
    You win ${playerSelection} beats ${computerSelection}`
  }
  else if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
    tie = tie + 1
    return `    Your choice is: ${playerSelection}
    Computer's choice is: ${computerSelection}
    aaaaaand......
    It is a tie`
  }
  else{
    lose = lose + 1
    return `    Your choice is: ${playerSelection}
    Computer's choice is: ${computerSelection}
    aaaaaand......
    You loose, ${computerSelection} beats ${playerSelection}`
  }
}

const playerSelection=prompt(`Rock, Paper or Scissors?`)
// const playerSelection=`Rock`
const computerSelection=computerPlay();

console.log(playRound(playerSelection, computerSelection));

