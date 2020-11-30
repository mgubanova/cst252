/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 19 November 2020
  * License: Public Domain
*/
// Define the settings for API
var URL = "https://xkcd.com/info.0.json";

// add event listener
$("#my-button").click(function(){
  // alert("pressed");
	$.ajax({
		url: URL,
		method: "GET",
	})
	.done(function(data) {
		console.log(data);
		var title = data.title;
		var imgUrl = data.img;
		var alt = data.alt;
		$("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src='${imgUrl}' alt='${alt}'>`);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
	})
})
