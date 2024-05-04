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


  // Function to capture computer choice
  const ComputerSelection = () => {
    const options = ["rock", "paper", "scissors"]
    const randNum = Math.floor(Math.random() * options.length)
    const selectedOption = options[randNum]
    sessionStorage.setItem("computerChoice", selectedOption)
  }
  // Call the ComputerChoice function to store the computer's choice
  ComputerSelection()

  // Function to determine the winner of the game
  const determineWinner = () => {

    // Obtain the user and computer choice from session storage
    const computerChoice = sessionStorage.getItem("computerChoice")
    const userChoice = sessionStorage.getItem("userChoice")

    // Condition to determine a tie between the user and computer
    if (userChoice === computerChoice) {
      document.getElementById(
        "winnerStatus"
      ).innerHTML = `<p style="color: green">It's a tie! Both the user and computer selected ${userChoice}</p>`
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      userScore++
      sessionStorage.setItem("userScore", userScore) // Store user score in local storage
      document.getElementById(
        "winnerStatus"
      ).innerHTML = `<p style="color: green">You win! ${userChoice} beats ${computerChoice}</p>`;
    } else {
      computerScore++
      document.getElementById(
        "winnerStatus"
      ).innerHTML = `<p style="color: green">Computer wins! ${computerChoice} beats ${userChoice}</p>`;
      sessionStorage.setItem("computerScore", computerScore) // Store computer score in local storage
    }
    // Update win count
    document.getElementById(
      "winCount"
    ).innerHTML = `<p>User: ${userScore} | Computer: ${computerScore}</p>`
  }

  // Function to remove computer and user choice and streak from session storage
  const clearSessionStorage = () => {
    sessionStorage.removeItem("userChoice")
    sessionStorage.removeItem("computerChoice")
    sessionStorage.removeItem("userScore")
    sessionStorage.removeItem("computerScore")
  }

  // Function to reset the game
  const resetGame = () => {
    clearSessionStorage()
    console.log("Game has been reset")
    ComputerSelection() // Call computer choice function to store the computer's choice after reset
  }