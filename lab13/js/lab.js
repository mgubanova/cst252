/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 01 October 2020
  * License: Public Domain
*/
// Define button and input field
var buttonSort = document.getElementById("button1");
var buttonAnag = document.getElementById("button2");
var inputSort = document.getElementById("input1");
var inputAnag = document.getElementById("input2");
var output = document.getElementById("output");

// shuffleArray - take an array and shuffle the contents
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// given a string, return string in Title Case
// Thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
// Function: Takes user input from the field, sorts it and displays
// Returns: sorted array
function buttonSortPress() {
  // get input from field
  var userInput = inputSort.value;
  // convert into lowercase and sort the input
  var sortedInput = userInput.toLowerCase().split("").sort().join("");
  // add sorted text to output
  var newEl1 = document.createElement("p");
  newEl1.innerHTML = "ZAP! Here's your alphabetized word: <br>" + sortedInput;
  output.appendChild(newEl1);
  // clear field value
  inputSort.value = "";
  // return cursor to the field
  inputSort.focus();
}

buttonSort.addEventListener("click", buttonSortPress);

// Function: Takes user input from the field, sorts it and displays
// Returns: sorted array
function buttonAnagPress() {
  // get input from field
  var userInput = inputAnag.value;
  // convert into lowercase and sort the input
  var anagInput = userInput.toLowerCase().split("");
  var anagramEl = shuffleArray(anagInput).join("");
  var newAnagram = toTitleCase(anagramEl)
  // add sorted text to output
  var newEl2 = document.createElement("p");
  newEl2.innerHTML = "YAY! Here's your anagram: <br>" + newAnagram;
  output.appendChild(newEl2);
  // clear field value
  inputAnag.value = "";
  // return cursor to the field
  inputAnag.focus();
}

buttonAnag.addEventListener("click", buttonAnagPress);
