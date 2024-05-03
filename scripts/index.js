  // Global Variables

  // Variables to store the user and computer scores
  let userScore = 0
  let computerScore = 0

  // Functions to capture user choice based on selected button
  const selectRock = () => {
    const rock = document.getElementById("rock")
    rock.addEventListener("click", () => {
      sessionStorage.setItem("userChoice", "rock") // Store user choice in local storage
      return
    })
  }

  const selectPaper = () => {
    const paper = document.getElementById("paper")
    paper.addEventListener("click", () => {
      sessionStorage.setItem("userChoice", "paper") // Store user choice in local storage
      return
    })
  }

  const selectScissor = () => {
    const scissor = document.getElementById("scissors")
    scissor.addEventListener("click", () => {
      sessionStorage.setItem("userChoice", "scissors") // Store user choice in local storage
      return
    })
  }

  // Obtain user choice from local storage
  const getUserChoice = () => {
    let userChoice = sessionStorage.getItem("userChoice")
    console.log("User selected: ", userChoice);
    return 
  }

  

  // Function to capture computer choice
  const ComputerChoice = () => {
    let options
    const randNum = Math.floor(Math.random() * 3)
    switch (randNum) {
      case 0:
        options = "rock"
        break
      case 1:
        options = "paper"
        break
      case 2:
        options = "scissors"
        break
      default:
        console.log("ERROR: Please input either rock, paper, or scissors.")
        break
    }
    sessionStorage.setItem("computerChoice", options)
  }
  // Call the ComputerChoice function to store the computer's choice
  ComputerChoice()

  // Obtain user choice from local storage
  const getComputerChoice = () => {
    let computerChoice = sessionStorage.getItem("computerChoice")
    console.log("Computer selected: ", computerChoice);
    return 
  }



// Function to remove computer and user choice session storage
const clearSessionStorage = () => {
  sessionStorage.removeItem("userChoice")
  sessionStorage.removeItem("computerChoice")
}

const userChoice = getUserChoice()
const computerChoice = getComputerChoice()

  // Function to determine the winner of the game
  // The function will take in two parameters, the user choice and the computer choice
  const determineWinner = (userChoice, computerChoice) => {
    // Condition to determine a tie between the user and computer
    if (userChoice === computerChoice) {
      document.getElementById(
        "winnerStatus"
      ).innerHTML = `<p>It's a tie! Both the user and computer selected ${userChoice}</p>`;
      clearSessionStorage.
      return
    }

    // Conditions to determine the winner when there's no tie
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      userScore++
      document.getElementById(
        "winnerStatus"
      ).innerHTML = `<p>You win! ${userChoice} beats ${computerChoice}</p>`
    } else {
      computerScore++
      document.getElementById(
        "winnerStatus"
      ).innerHTML = `<p>Computer wins! ${getComputerChoice()} beats ${getUserChoice()}</p>`
    }

    // Update win count
    document.getElementById(
      "winCount"
    ).innerHTML = `<p>User: ${userScore} | Computer: ${computerScore}</p>`
}
  
// Function to reset the game
const resetGame = () => {
  clearSessionStorage()
  console.log("Game has been reset")
}

  // determineWinner(userChoice, computerChoice)
