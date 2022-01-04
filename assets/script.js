var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer");
// var guessWord = document.querySelector("");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#loss");
// var formCont = document.querySelector("#formCont");


// created an array with the words that we will be randomly selecting for the user to guess
var words = ["bootcamp", "boolean", "Github", "algorithm", "developer"];


function timer() {
    window.sec = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
/*this will take the user to the score page once the timer is up
    setTimeout(function() {
        window.location.href="./scores.html"
    }, */ 
// 60000);
}

timer();

// add event listener to start button 
startButton.addEventListener("click", start);
// select a random index in the array
    function start() {
    //created a variable to store the random index that is selected
    var randomIndex= Math.floor(Math.random() * words.length);
    // now we want to grab the word that is in the index selected randomly
    var randomWord= words[randomIndex];
    console.log(randomWord);
    //now we want to have the blank spaces populate for the random word that was chosen

    // then create an if statement in the event user does not select one of the letters in the word

}