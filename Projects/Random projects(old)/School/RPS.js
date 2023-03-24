console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Not valid input");
  }
};

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
  if (userChoice === 'bomb'){return "You win"}
}

function playgame1Player(userChoice) {
  let userChoice = getUserChoice(userChoice);
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playgame1Player();

const getUserChoiceA = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Not valid input");
    }

  };
  
  const getUserChoiceB = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Not valid input");
    }
  };
  
  
  function determineWinner(userChoiceA, userChoiceB) {
    if (userChoiceA === userChoiceB) {
      return "It's a tie!";
    }
    if (userChoiceA === "rock") {
      if (userChoiceB === "paper") {
        return "Player B Wins";
      } else {
        return "Player A wins!";
      }
    }
    if (userChoiceA === "paper") {
      if (userChoiceB === "scissors") {
        return "Player B wins!";
      } else {
        return "Player A wins!";
      }
    }
    if (userChoiceA === "scissors") {
      if (userChoiceB === "rock") {
        return "Player B wins!";
      } else {
        return "Player A wins!";
      }
    }
    if (userChoiceA === 'bomb'){return "Player A wins"}
    if (userChoiceB === 'bomb'){return "player B wins"}
    
  }
  function playgame2Player(userChoiceA, userChoiceB) {

    let userChoiceA = getUserChoiceA(userChoiceA);
    console.log(userChoiceA);
    let userChoiceB = getUserChoiceB(userChoiceB);
    console.log(userChoiceB);
    console.log(determineWinner(userChoice, userChoiceB));
  }