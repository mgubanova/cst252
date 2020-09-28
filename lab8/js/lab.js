/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 24 September 2020
  * License: Public Domain
*/

// Output function
window.onload = function() {
  outputElement = document.getElementById("output");

// Functions: take a parameter "test"
// Return: the argument and a string
function firstThing(test) {
  console.log(test + ": this is the first thing.<br>")
  outputElement.innerHTML += test + ": this is the first thing.<br>";
}
function secondThing(test) {
    console.log(test + ": this is the second thing.<br>")
    outputElement.innerHTML += test + ": this is the second thing.<br>";
}
function thirdThing(test) {
    console.log(test + ": this is the third thing.<br>")
    outputElement.innerHTML += test + ": this is the second thing.<br>";
}

// first test - this test calls on all three functions in order by using the argument "TEST 1"
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// second test - in order
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2")
}, 0);
setTimeout(function() {
  thirdThing("TEST 2")
}, 0);

// third test - 2,3,1 with a 2 seconds delay
setTimeout(function() {
  firstThing("TEST 3");
}, 5000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 3000);
}
