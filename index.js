var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomNumber1 + ".png";
var diceimagesource = "./images/" + randomdiceimage;
var image1 =document.querySelectorAll(".img1")[0];
image1.setAttribute("src",diceimagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage2 = "dice" + randomNumber2 + ".png";
var diceimagesource = "./images/" + randomdiceimage2;
var image2 =document.querySelectorAll(".img2")[0];
image2.setAttribute("src",diceimagesource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=" Player 1 Won";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML=" Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML=" Draw";
}
