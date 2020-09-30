/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 29 September 2020
  * License: Public Domain
*/

// Output function
window.onload = function() {
  outputElement = document.getElementById("output");

// Functions: take a parameter "test"
// Return: the argument and a string
var new1El = document.createElement("p");
new1El.id = "newparagraph";
new1El.innerHTML = "This is a new paragraph in serif font.";

outputElement.appendChild(new1El);

var new2El = document.createElement("p");
new2El.id = "newparagraph2";
new2El.innerHTML = "This is a new paragraph in blue color.";

outputElement.appendChild(new2El);

new1El.style.fontFamily = "serif";
new2El.style.color = "blue";
}
