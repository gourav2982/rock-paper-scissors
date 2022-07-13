function computerSelection(){
    let rando = Math.floor(Math.random()*3);
    if(rando===0){
        return "rock";
    }
    else if(rando===1){
        return "paper";
    }
    else{
        return "scissor"