/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 20 October 2020
  * License: Public Domain
*/

// Define the output field
var output = document.getElementById("output");

// Constructor Definition
function Vehicle(type, make, model, year, color) {
	this.type = type;
	this.make = make;
	this.model = model;
  this.year = year;
  this.color = color;
  this.info = function() {
    return "I get around using a " + this.type + ". It's a " + this.color + " " + this.year + " " + " " + this.make + " " + this.model + ".";
  }
}
// Create new objects using the constructor
var myCar = new Vehicle("car", "Honda", "Civic", "2007", "grey");
var myBike = new Vehicle("bike", "GT", "Avalanche 1.0", "2008", "black");

// Create an array of vehicles
var vehicleArray = [myCar, myBike];

// loop through array of vehicles
for (i=0; i<vehicleArray.length; i++) {
// get info for object in array
  var info = vehicleArray[i].info();
  console.log(info);
// add info to output div
  var newEl = document.createElement("p");
  newEl.innerHTML = info;
  output.appendChild(newEl);
}
