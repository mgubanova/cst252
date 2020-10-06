/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 06 October 2020
  * License: Public Domain
*/
// Define button and input field
var button = document.getElementById("myButton");
var input = document.getElementById("input");
var output = document.getElementById("output");

// Function: counts the letters and gets a remainder with 4
// Parameter: string
// Returns: number between 0 and 3
function sortingHat(str) {
  // count the letters in str and assigns it to a variable len
  var len = str.length;
  // use modulus (% operator) to get the remainder with 4
  var mod = len % 4;
  // conditional returns Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else {
    return "Hufflepuff";
  }
}

// Function: Takes user input from the field, runs it through SortingHat function and appends new paragraph to the HTML
function buttonPress() {
  // get input from field
  var name = input.value;
  // identify the house by runninh input through the sortingHat function
  var house = sortingHat(name);
  // add a paragraph of text to output
  output.innerHTML = "The Sorting Hat has sorted you into " + house;
  // clear field value
  input.value = "";
  // return cursor to the field
  input.focus();
}
button.addEventListener("click", buttonPress);
