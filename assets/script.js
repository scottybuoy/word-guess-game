var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer");
// var guessWord = document.querySelector("");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#loss");
var randomWord = "";
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
    randomWord= words[randomIndex];
    console.log(randomWord);
    // get the length of the random word and create lines for each letter in the word
    var wordLength= randomWord.length;
    console.log(wordLength);
    // this will remove the inner html
    document.getElementById("blank-word").innerHTML=""   
    // this will replace the inner html with 1 underscore for each letter in the word
    for (let i = 0; i < wordLength; i++) {
        document.getElementById("blank-word").innerHTML+=" _ "
    }
}

// using key down, we'd see if the user selected a letter in the randomWord and make it appear
document.addEventListener("keydown", populate);

function populate(letterPressed) {
    var letterKeyed = letterPressed.key;
    console.log(letterPressed.key);

    if (randomWord.indexOf(letterKeyed) > -1) {
        // we want to change the inner html but in order to do that, we need to find what index the letter is in
        randomWord.indexOf(letterKeyed) 
        console.log(randomWord.indexOf(letterKeyed));
        // now that we have the index of the letter that was keyed, we need to replace the inner HTML with that letter
        // document.getElementById("blank-word").innerHTML[randomWord.indexOf(letterKeyed)] = letterKeyed
        var currentWord = document.getElementById("blank-word").innerHTML;
        console.log(currentWord);

        currentWord[randomWord.indexOf(letterKeyed)] = letterKeyed;
        console.log(currentWord);
        document.getElementById("blank-word").innerHTML = currentWord;
    }
}

    // then create an if statement in the event user does not select one of the letters in the word
