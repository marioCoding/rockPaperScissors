
// Create a funciotn named getUserChoice that takes a single parameter userInput
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
      return userInput;
    else
      console.log('Error: input rock, paper or scissors only.');
  };
  
  // Create a function that has the computer make a choice
  function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
  
    if (number === 0)
      return 'rock';
    else if (number === 1) 
      return 'paper';
    else if (number === 2)
      return 'scissors';
  };
  
  // Create a function that determines the winner of the game
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice)
      return 'Tie';
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper')
        return 'Computer Won';
      else
        return 'User Won';
    }
  
     if (userChoice === 'paper') {
      if (computerChoice === 'scissors')
        return 'Computer Won';
      else
        return 'User Won';
     }
  
     if (userChoice === 'scissors') {
      if (computerChoice === 'rock')
        return 'Computer Won';
      else
        return 'User Won';
     }
  
     if (userChoice === 'bomb') 
      return 'User Won'
  };
  
  // Create a function to start the game and log the results.
  function playGame() {
    let userChoice = getUserChoice('Paper');
    let computerChoice = getComputerChoice();
  
    console.log(`User throws ${userChoice}`);
    console.log(`Computer throws ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice))
  };
  
  playGame();
  