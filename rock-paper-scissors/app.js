const scoresArea = document.getElementById("scores")
        const computerArea = document.getElementById("computerChoice");
        const resultArea = document.getElementById("result");
        const Choices = ["rock", "paper", "scissors"];
        let humanScore = 0;
        let computerScore = 0;

////buttons
        const buttons = document.querySelectorAll("button");

        buttons.forEach(button => {
            button.addEventListener("click", function(event){
                const humanChoice = getHumanChoice(event);
                const computerChoice = getComputerChoice();

                playRound(humanChoice, computerChoice);
            });
        });
////

        function getComputerChoice(){
            return Choices[Math.floor(Math.random() * Choices.length)];
        };


        function getHumanChoice(){
            return event.target.id;
        };

        function playRound(humanChoice, computerChoice){
            computerArea.textContent = `Computer choice is: ${computerChoice}`;
            scoresArea.textContent = `Your score: ${humanScore} ---- computer score: ${computerScore}`;

            handleResult();

            if (humanChoice == computerChoice){
                scoresArea.textContent += "\n\n This play was draw";
            }
            else if (
                (humanChoice === "rock" && computerChoice ==="scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ){
                humanScore++;

            }
            else{
                computerScore++;
            }
        };

        function handleResult(){
            if (humanScore == 5 || computerScore == 5){
                buttons.forEach(button => {
                        button.disabled = true;
                    });
                handleRestart()

                if (humanScore == 5){
                    resultArea.textContent = "You have Won!! Good Job";
                }
                else if (computerScore == 5){
                    resultArea.textContent = "You have Lost!! better luck next time";
                }
            }
        }
    
        function handleRestart(){
            const resetBtn = document.createElement("button");
            resetBtn.textContent = "Restart";
            document.body.appendChild(resetBtn);

            resetBtn.addEventListener("click", () => {
                humanScore = 0;
                computerScore = 0;
                buttons.forEach(button => {
                        button.disabled = false;
                    });
                resultArea.textContent = "";
                scoresArea.textContent = "";
                resetBtn.remove();
            })
        }