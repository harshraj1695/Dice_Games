
var randomNumber1 = Math.floor(Math.random() * 6)+1;//1 -6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-- dice6.png
var randomImageSource = "images/"+randomDiceImage; // images/dice1.png-- images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimagesource2 = "images/dice"+ randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="😍 Player1 Wins!!"
} else if(randomNumber1<randomnumber2){
    document.querySelector("h1").innerHTML="🚩 Player2 Wins!!"
}else{
    document.querySelector("h1").innerHTML="Its a Draw 💕"
}
document.querySelector("button").addEventListener("click", function() {
    window.location.reload();
});
