/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 08 October 2020
  * License: Public Domain
*/
// Define the output field
var output = document.getElementById("output");

// Function: counts from 0 to 199 and displays certain arrays for each of the numbers
// Returns: a specific array depending on the divisibility of a number
function fizzBuzzBoom() {
  for (var counter=0; counter<200; counter++) {
    if (counter % 15 == 0) {
      console.log("FizzBuzz");
      var newEl1 = document.createElement("p");
      newEl1.innerHTML = "FizzBuzz";
      output.appendChild(newEl1);
      }
    else if (counter % 3 == 0) {
      console.log("Fizz");
      var newEl2 = document.createElement("p");
      newEl2.innerHTML = "Fizz";
      output.appendChild(newEl2);
      }
    else if (counter % 5 == 0) {
      console.log("Buzz");
      var newEl3 = document.createElement("p");
      newEl3.innerHTML = "Buzz";
      output.appendChild(newEl3);
      }
    else if (counter % 7 == 0) {
      console.log("Boom");
      var newEl4 = document.createElement("p");
      newEl4.innerHTML = "Boom";
      output.appendChild(newEl4);
      }
    else {
      console.log("Number " + counter);
      var newEl5 = document.createElement("p");
      newEl5.innerHTML = "Number " + counter;
      output.appendChild(newEl5);
      }
  }
}
fizzBuzzBoom()
