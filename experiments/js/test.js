var button = document.getElementById("myButton");

function sayMyName() {
  var name = prompt("What is your name?");
  var h1 = document.querySelector("h1");
  h1.innerText = "Hello " + name;
}

button.addEventListener("click", sayMyName);
