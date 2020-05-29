let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

let diceImg = document.querySelector(".dice");
let players = document.querySelectorAll(".player");
let names = document.querySelectorAll(".name");
let finalScore = document.getElementById("final");
// buttons -----------
let newGame = document.querySelector(".new");
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");

reset();

roll.addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = "imgs/dice-" + dice + ".png";
  diceImg.style.visibility = "visible";
  if (dice != 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;

    changeActive();
  }
});

hold.addEventListener("click", function () {
  scores[activePlayer] += roundScore;
  document.querySelector("#total-" + activePlayer).textContent =
    scores[activePlayer];
  document.querySelector("#current-" + activePlayer).textContent = "0";
  roundScore = 0;
  changeActive();

  if (scores[0] >= finalScore.value && finalScore.value != 0) {
    names[0].textContent = "WINNER!";
    names[0].style.color = "#eb4d4d";
    names[0].style.fontWeight = "400";
    changeActive();
    endGame();
  } else if (scores[1] >= finalScore.value && finalScore.value != 0) {
    names[1].textContent = "WINNER!";
    names[1].style.color = "#eb4d4d";
    names[1].style.fontWeight = "400";
    changeActive();
    endGame();
  }
});

newGame.addEventListener("click", function () {
  reset();
});

function reset() {
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#total-0").textContent = "0";
  document.querySelector("#total-1").textContent = "0";
  diceImg.style.visibility = "hidden";
  roundScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  document.querySelector("#player-0").classList.add("current");
  document.querySelector("#player-1").classList.remove("current");
  names[0].textContent = "PLAYER 1";
  names[1].textContent = "PLAYER 2";
  names[0].style.color = "#000";
  names[1].style.color = "#000";
  names[0].style.fontWeight = "200";
  names[1].style.fontWeight = "200";
  let buttons = document.getElementsByClassName("disable");
  for (var i = 0; i <= 1; i++) {
    buttons[i].disabled = false;
  }
}

function changeActive() {
  document.querySelector("#player-0").classList.toggle("current");
  document.querySelector("#player-1").classList.toggle("current");
  if (!activePlayer) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function endGame() {
  let buttons = document.getElementsByClassName("disable");
  for (var i = 0; i <= 1; i++) {
    buttons[i].disabled = true;
  }
}
