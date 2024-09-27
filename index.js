var randomeNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src", "images/dice" + randomeNumber1 + ".png");

var randomeNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", "images/dice" + randomeNumber2 + ".png");

var h1Element = document.getElementsByTagName("h1")[0];
if (randomeNumber1 > randomeNumber2) {
  h1Element.innerHTML = "Player 1 Wins";
} else if (randomeNumber1 < randomeNumber2) {
  h1Element.innerHTML = "Player 2 Wins";
} else if (randomeNumber1 === randomeNumber2) {
  h1Element.innerHTML = "Draw";
}
