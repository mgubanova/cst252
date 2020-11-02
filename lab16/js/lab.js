/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 29 October 2020
  * License: Public Domain
*/
$("#output").after("<button>Click me!</button>");
console.log("button created")

$("button").attr("id", "button")
console.log("id changed")

$("#button").click(function() {
	alert("You made me orange!")
	$("#button").toggleClass("orange");
})
