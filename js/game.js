var computerselect = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var win = 0;
var loss = 0;
var left = 9;
var latterguess = [];
var computerGuess = [];


var compGuess = computerselect[Math.floor(Math.random() * computerselect.length)];
computerGuess.push(compGuess);
console.log(computerGuess[0]);



document.onkeyup = function (event) {
    var userGuess = event.key;
    latterguess.push(userGuess);




    if ((userGuess == computerGuess[0]) && (left > 0)) {
        win++;
        left = 9;
        latterguess.length = 0;
        computerGuess.length = 0;
        var compGuess = computerselect[Math.floor(Math.random() * computerselect.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);

    } else if ((userGuess != computerGuess[0]) && (left > 0)) {
        left = left - 1;
    } else {
        loss++;
        left = 9;
        latterguess.length = 0;
        computerGuess.length = 0;
        var compGuess = computerselect[Math.floor(Math.random() * computerselect.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }


    var guessletter = "<p>Guess what letter I'm thinking of!</p>"
    var win2 = "<p><h1>Wins : " + win + "</h1></p>";
    var Loss = "<p><h1>Loss : " + loss + "</h1></p>";
    var guessleft = "<p><h1>Guess Left : " + left + "</h1></p>";
    var Guess1 = "<p><h1>Guess : " + latterguess + "</h1></p>"


    //document.querySelector("#guess").innerHTML = guessletter;
    document.querySelector("#wins").innerHTML = win2;
    document.querySelector("#loss").innerHTML = Loss;
    document.querySelector("#usesguess").innerHTML = Guess1;
    document.querySelector("#guessleft").innerHTML = guessleft;
}

