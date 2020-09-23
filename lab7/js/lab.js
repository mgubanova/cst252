/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 22 September 2020
  * License: Public Domain
*/
// Function: accepts a string and sorts it in alphabetical order
// Param: string
// Returns: sorted, reverse array
function sortUserName(userName) {
return userName.toLowerCase().split("").sort().join("");
}
// Function: prompts user input
function main() {
var userName = window.prompt("ALPHABETIZ-O-RAY! Enter any word to alphabetize it and see the result at the bottom!");

// Output
document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
var sortedName = sortUserName(userName);
document.writeln("ZAP! Here's your alphabetized word: " + "</br>" + sortedName);
}
// Input
main();
