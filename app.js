let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const userscore= document.querySelector("#userscore");
const compscore= document.querySelector("#compscore");

const msg= document.querySelector("#msg");


const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

const gameResult=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscore.textContent=userScore;
        console.log("You win!")
        msg.textContent=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscore.textContent=compScore;
        console.log("You Lose!")
        msg.textContent=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log(`User choice is ${userChoice}`);
    const compChoice= genCompChoice();
    console.log(`Comp choice is ${compChoice}`);
    if(userChoice===compChoice){
        console.log("Game is Draw");
        msg.textContent="Draw, Play Again!"
        msg.style.backgroundColor="blue";
    }
    else{
        let userWin= true ;
        if(userChoice==="rock"){
            //paper,scissor
            userWin = compChoice==="paper" ? false : true ;
        }
        else if(userChoice==="paper"){
            //scissor,rock
            userWin = compChoice==="scissor" ? false : true;
        }
        else{
            //rock,paper
            compChoice=== "rock" ? false : true;
        }
        gameResult(userWin,userChoice,compChoice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})

