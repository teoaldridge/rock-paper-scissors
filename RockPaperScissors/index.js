let playerSelection;
let computerSelection;

let gameChoices = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() * gameChoices.length);

computerSelection = gameChoices[random];
//playerSelection = prompt();

function playRound(computerSelection, playerSelection){
   
       if (computerSelection === playerSelection){
       
       console.log("It's a draw.");
       return 0;
   
       } else if (computerSelection == "scissors" && playerSelection == "paper"){
       
       console.log("Computer wins. Scissors win over paper.");  
         return -1;

       }else if (computerSelection == "paper" && playerSelection == "scissors"){
        
       console.log("Player wins. Scissors win over paper.");
       return 1;

       }else if (computerSelection == "rock" && playerSelection == "paper"){
      
       console.log("Player wins. Paper wins over rock.");
       return 1;

       }else if(computerSelection == "paper" && playerSelection == "rock"){
     
       console.log("Computer wins. Paper wins over rock.");
       return -1;

       }else if (computerSelection == "rock" && playerSelection == "scissors"){
      
       console.log("Computer wins. Rock wins over scissors.");
       return -1;
       }else if ( "scissors" && playerSelection == "rock"){
    
       console.log("Player wins. Rock wins over scissors."); 
        return 1;
       } 
}

//playRound(computerSelection, playerSelection);

function game(playRound){
   let score = 0;
   for(let i=0; i<5; i++) {
    playerSelection = prompt();
    score += playRound(computerSelection, playerSelection);
    console.log(score);
   }
   return score;
}

game(playRound);