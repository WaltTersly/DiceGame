'use strict';
const randomNumber1 =Math.floor(Math.random() * 6) + 1;
// for the left dice
const randomDicceImg = "dice" + randomNumber1 + ".png";
const randomImgSource = "images/" +randomDicceImg;
// changing dice image of first image
const img1 = document.querySelector("img.img1");
img1.setAttribute("src", randomImgSource);

// for the right dice
const randomNumber2 =Math.floor(Math.random() * 6) + 1;

const randomDiceImg = "dice" + randomNumber2 + ".png";
const randomImgSrc = "images/" +randomDiceImg;
document.querySelector("img.img2").setAttribute("src", randomImgSrc);

// check which player won
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏳️ player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏳️ player 2 Wins";
} else {
    document.querySelector("h1").innerHTML ="Draw!";
}