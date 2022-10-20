// dice1
var dice1 = Math.floor(Math.random() * 6) + 1;
var diceRandom1 = "images/dice" + dice1 + ".png ";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", diceRandom1);

//dice2
var dice2 = Math.floor(Math.random() * 6) + 1;
var diceRandom2 = "images/dice" + dice2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", diceRandom2);

//h1
if (dice1 > dice2) {
    document.querySelector("h1").innerText = "Player 1 Wins!!"
} else if (dice1 < dice2) {
    document.querySelector("h1").innerText = "Player 2 Wins!!"
} else {
    document.querySelector("h1").innerText = "Draw!"
}


const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)
