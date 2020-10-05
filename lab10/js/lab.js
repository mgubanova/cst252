/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 01 October 2020
  * License: Public Domain
*/
// Define button and input field
var button = document.getElementById("myButton");
var input = document.getElementById("input");
var output = document.getElementById("output");

// Function: Takes user input from the field, sorts it and displays
// Returns: sorted array
function buttonPress() {
  // get input from field
  var userInput = input.value;
  // convert into lowercase and sort the input
  var sortedInput = userInput.toLowerCase().split("").sort().join("");
  // add sorted text to output
  output.innerHTML = "ZAP! Here's your alphabetized word: <br>" + sortedInput;
  // clear field value
  input.value = "";
  // return cursor to the field
  input.focus();
}

button.addEventListener("click", buttonPress);
