var randomNumber1 = Math.floor((Math.random() * 6))+1; //creating the first random randomNumber1
var randomImagesrc = "dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesrc);

//Dice image 2 source
var randomNumber2 = Math.floor((Math.random() * 6))+1; //creating the first random randomNumber1
var randomImagesrc2 = "dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesrc2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "It is draw";
}
