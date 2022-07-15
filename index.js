function computerSelection() {
  let rando = Math.floor(Math.random() * 3);
  if (rando === 0) {
    return 1;
  } else if (rando === 1) {
    return 2;
  } else {
    return 3;
  }
}
let computerscore = 0;
let playerscore = 0;

let photo1 = document.querySelector(".photo1");
let bPaper = document.querySelector(".b-paper");
bPaper.addEventListener("click", function () {
  if (playerscore < 5 && computerscore < 5) {
    photo1?.setAttribute("src", "photo/paper.jpg");
    let cselect = computerSelection();
    if (cselect == 2) {
      document.querySelector(".photo2")?.setAttribute("src", "photo/paper.jpg");
    } else if (cselect == 1) {
      document.querySelector(".photo2")?.setAttribute("src", "photo/rock.jpg");
      playerscore++;
    } else if (cselect == 3) {
      document
        .querySelector(".photo2")
        ?.setAttribute("src", "photo/scissor.jpg");
      computerscore++;
    }
    let pcounter = document.querySelector(".p-score-counter");
    pcounter.innerHTML = `${playerscore}`;
    let ccounter = document.querySelector(".c-score-counter");
    ccounter.innerHTML = `${computerscore}`;
    if(playerscore==5){
      let annou = document.querySelector(".announcment")
      annou.innerHTML = "YOU WIN!"
    }
    else if(computerscore==5){
      let annou = document.querySelector(".announcment")
      annou.innerHTML = "YOU LOSE!"
    }
  }
});

let bRock = document.querySelector(".b-rock");
bRock.addEventListener("click", function () {
  if (playerscore < 5 && computerscore < 5) {
    photo1?.setAttribute("src", "photo/rock.jpg");
    let cselect = computerSelection();
    if (cselect == 2) {
      document.querySelector(".photo2")?.setAttribute("src", "photo/paper.jpg");
      computerscore++;
    } else if (cselect == 1) {
      document.querySelector(".photo2")?.setAttribute("src", "photo/rock.jpg");
    } else if (cselect == 3) {
      document
        .querySelector(".photo2")
        ?.setAttribute("src", "photo/scissor.jpg");
      playerscore++;
    }
    let pcounter = document.querySelector(".p-score-counter");
    pcounter.innerHTML = `${playerscore}`;
    let ccounter = document.querySelector(".c-score-counter");
    ccounter.innerHTML = `${computerscore}`;
    if(playerscore==5){
      let annou = document.querySelector(".announcment")
      annou.innerHTML = "YOU WIN!"
    }
    else if(computerscore==5){
      let annou = document.querySelector(".announcment")
      annou.innerHTML = "YOU LOSE!"
    }
  }
});

let bScissor = document.querySelector(".b-scissor");
bScissor.addEventListener("click", function () {
  if (playerscore < 5 && computerscore < 5) {
    photo1?.setAttribute("src", "photo/scissor.jpg");
    let cselect = computerSelection();
    if (cselect == 2) {
      document.querySelector(".photo2")?.setAttribute("src", "photo/paper.jpg");
      playerscore++;
    } else if (cselect == 1) {
      document.querySelector(".photo2")?.setAttribute("src", "photo/rock.jpg");
      computerscore++;
    } else if (cselect == 3) {
      document
        .querySelector(".photo2")
        ?.setAttribute("src", "photo/scissor.jpg");
    }
    let pcounter = document.querySelector(".p-score-counter");
    pcounter.innerHTML = `${playerscore}`;
    let ccounter = document.querySelector(".c-score-counter");
    ccounter.innerHTML = `${computerscore}`;
    if(playerscore==5){
      let annou = document.querySelector(".announcment")
      annou.innerHTML = "YOU WIN!"
    }
    else if(computerscore==5){
      let annou = document.querySelector(".announcment")
      annou.innerHTML = "YOU LOSE!"
    }
  }
});
