console.log("hi");

// Function used to capture user input and convert it to lowercase
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  // Identify if user provided rock, paper, or scissors
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
    // Error if provided input is not accepted
  } else {
    console.log("ERROR: Please input either rock, paper, or scissors.");
  }
};

function getComputerChoice() {
  let options;
  const randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      options = "rock";
      break;
    case 1:
      options = "paper";
      break;
    case 2:
      options = "scissors";
      break;
    default:
      console.log("ERROR: Please input either rock, paper, or scissors.");
      break;
  }
  return options;
}

// Condition to determine the choices of the two choices played
function determineWinner(userInput, computerChoice) {
  // Condition to determine a tie between the user and computer
  if (userInput === computerChoice) {
    return "It is a tie";
  }
  // Condition to determine a winner between the user and computer
  if (userInput === "rock") {
    if (computerChoice === "paper") {
      return "Sorry computer, the user has won this round.";
    } else {
      return "The computer has lost this round.";
    }
  } else if (userInput === "paper") {
    if (computerChoice === "scissors") {
      return "Computer has won this round.";
    } else {
      return "The computer has lost this round.";
    }
  } else if (userInput === "scissors") {
    if (computerChoice === "rock") {
      return "The computer has won this round.";
    } else {
      return "The computer has lost this round.";
    }
  }
}

// Log to calls functions for choice selection
function playGame() {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

//Initate game
playGame();
