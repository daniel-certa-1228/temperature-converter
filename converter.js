console.log( "converter.js");

function toCelsius(fahrenheit) {
	let tempC =  (fahrenheit - 32) / 1.8
  	return tempC
}

function toFahrenheit(celsius) {
  	let tempF = (celsius * 1.8) + 32
  	return tempF
}

// Get a reference to the button element in the DOM
let tempButton = document.getElementById("temp-btn");
let resetButton = document.getElementById("reset-btn");
// console.log( "tempButton", tempButton );
// console.log( "resetButton", resetButton );

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter() {
	if (document.getElementById("fahrenheit").checked) {
		return true;
	}  else if (document.getElementById("celsius").checked) {
		return false;
	}  else  {
		return null;
	}	
}

determineConverter();
console.log("event", determineConverter)
// Assign a function to be executed when the button is clicked
// tempButton.addEventListener("click", determineConverter);