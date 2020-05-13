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
  alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
  guesses++;
  alert("OOPS SORRY!! TRY A BIGGER NUMBER");
}
}