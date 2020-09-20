/*
  * Author: Marta Gubanova
  * Partner: Sebastian Tamiano
  * Created: 19 September 2020
  * License: Public Domain
*/
// Define an array and an object
var myTransport = ["Car", "Bicycle", "On foot", "Bus"];

var myMainRide = {
  make: "Honda",
  model: "Civic",
  year: 2007,
  color: "Grey",
  age: function() {
    return 2020 - year
  }
};

// Output
document.writeln("This is how I get around: " + myTransport + "<br>");
document.writeln("My main ride is a car: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
