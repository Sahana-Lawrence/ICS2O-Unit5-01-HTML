// JavaScript File

// random value generated
var y = Math.floor(Math.random() * 6) + 1;
// counting the number of guesses
// made for correct Guess
var guesses = 1;
document.getElementById("submitguess").onclick = function() {
// number guessed by user
var x = document.getElementById("number").value;
if(x == y)
{
  alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guesses + " GUESS ");
}
else if(x > y) /* if guessed number is greater than actual number*/
{
  guesses++;
  alert("SORRY WRONG!! TRY A SMALLER NUMBER");
}
else
{
  guesses++;
  alert("SORRY WRONG!! TRY A BIGGER NUMBER");
}
}