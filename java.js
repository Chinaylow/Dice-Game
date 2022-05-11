var player1 = "Player1";
var player2 = "Player2";
var player1Score = 0;
var player2Score = 0;
// window.onload = function rollDice(){
    function rollDice(){
    var randomNum1 = Math.floor(Math.random() * 6 ) +1;
    var randomNum2 = Math.floor(Math.random() * 6 ) +1;
    document.querySelector(".img1").setAttribute("src", "dice" + randomNum1 + ".png");

    document.querySelector(".img2").setAttribute("src", "dice" + randomNum2 + ".png");

    if(randomNum1 === randomNum2){
        document.querySelector("h1").innerHTML = "It's a draw 😬"
        player1Score += 0;
        player2Score += 0
    }
    else if(randomNum1 < randomNum2){
        document.querySelector("h1").innerHTML = (player2 + " WINS ! 🤪");
        player2Score += 1;
    }
    else{
        document.querySelector("h1").innerHTML = (player1 + " WINS ! 😜");
        player1Score += 1;
    }
    
    document.querySelector("#player1-score").innerHTML = player1Score;
    document.querySelector("#player2-score").innerHTML = player2Score;

}