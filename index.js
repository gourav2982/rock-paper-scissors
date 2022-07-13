function computerSelection(){
    let rando = Math.floor(Math.random()*3);
    if(rando===0){
        return "rock";
    }
    else if(rando===1){
        return "paper";
    }
    else{
        return "scissor";
    }
}
let rounds = prompt("Choose no. of rounds you wanna play.");
let scorePlayer = 0;
let scoreComputer =0;
for(let i=1;i<=rounds;i++){
    let playerSelection = prompt("Pick rock , paper or scissor:");
    let cs = computerSelection();
    if(cs===playerSelection.toLowerCase()){
        alert(`Round ${i} is draw.`);
    }
    else if(cs==="rock" && playerSelection.toLowerCase()==="paper"){
        alert(`Round ${i} is your win.`);
        scorePlayer++;
    }
    else if(cs==="paper" && playerSelection.toLowerCase()==="scissor"){
        alert(`Round ${i} is your win.`);
        scorePlayer++;
    }
    else if(cs==="scissor" && playerSelection.toLowerCase()==="rock"){
        alert(`Round ${i} is your win.`);
        scorePlayer++;
    }
    else if(playerSelection.toLowerCase()!=="rock" && playerSelection.toLowerCase()!=="paper" && playerSelection.toLowerCase()!=="scissor"){
        alert("INVALID input. This round will start again.");
        i--;
    }
    else{
        alert(`Round ${i} is your loss.`);
        scoreComputer++;
    }

}
if(scoreComputer>scorePlayer){
    alert("YOU LOSS");
    alert(`Your score is ${scorePlayer} & Computer score is ${scoreComputer}`)
}
else if(scoreComputer<scorePlayer){
    alert("YOU WIN");
    alert(`Your score is ${scorePlayer} & Computer score is ${scoreComputer}`)
}
else{
    alert("DRAW");
    alert(`Your score is ${scorePlayer} & Computer score is ${scoreComputer}`)
}