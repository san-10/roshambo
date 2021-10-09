const userScore = 0;
const computerScore = 0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function covertToWord(letter){
    if(letter === "r") return "Rock"
    if(letter === "p") return "Paper"
    return "Scissors";
}

getComputerChoice();

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${covertToWord(userChoice)} beats ${covertToWord(computerChoice)} you`;
}

function lose(userChoice, computerChoice){
    computerScore++; 
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${covertToWord(userChoice)} beats ${covertToWord(computerChoice)} you`;
    
    
}

function draw(){
    console.log("DRAW >_<")
}


function game(userChoice){
    
    const computerChoice = getComputerChoice();
    switch ( userChoice + computerChoice ){
        case "rs":
        case "pr":
        case "sp":
            win();
         break
        case "rp":
        case "sr":
        case "ps":
            lose();
          break
        case "rr":
        case "pp":
        case "ss":
           draw();
         break
            


    }

}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
    
})

paper_div.addEventListener('click',function(){
    game("p");
   
})

scissors_div.addEventListener('click',function(){
    game("s");
    
})

}

main();