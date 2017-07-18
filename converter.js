console.log( "converter.js");

function toCelsius(fahrenheit) {
	let tempC =  (fahrenheit - 32) / 1.8
  	return tempC
}

function toFahrenheit(celsius) {
  	let tempF = (celsius * 1.8) + 32
  	return tempF
}

function getValue() {
	let userTemp = document.getElementById("user_temperature").value;
	return userTemp;
}

function determineConverter() {
	if (document.getElementById("fahrenheit").checked) {
		return true;
	}  else if (document.getElementById("celsius").checked) {
		return false;
	}
}

function setColorFar(num) {
	let tempColor = "white";

	if (num < 32) {
		tempColor = "blue" ;
	}  else if (num > 90) {
		tempColor = "red" ;
	}  else {
		tempColor = "green";
	}
	return tempColor;
}

function setColorCel(num) {
	let tempColor = "white";

	if (num < 0) {
		tempColor = "blue" ;
	}  else if (num > 32) {
		tempColor = "red" ;
	}  else {
		tempColor = "green";
	}
	return tempColor;
}



function tempFinal() {
	let conversion = determineConverter();
	let outputHolder = document.getElementById("final-temperature");
	
	if (conversion === true) {
		let finalTemp = Math.round(toFahrenheit(getValue()));
		let tempColor = setColorFar(finalTemp);
		outputHolder.innerHTML += `<span style="color:${tempColor}">${finalTemp}</span> degrees`;

	}  else if  (conversion === false) {
		let finalTemp = Math.round(toCelsius(getValue()));
		let tempColor = setColorCel(finalTemp);
		outputHolder.innerHTML += `<span style="color:${tempColor}">${finalTemp}</span> degrees`;
	}
}

let tempButton = document.getElementById("temp-btn");

tempButton.addEventListener("click", function(click){
	click.preventDefault();
	let clear = document.getElementById("final-temperature");
	clear.innerHTML = "";
	tempFinal();
});

//This sets the return key to trigger the conversion
let userTempField = document.getElementById("user_temperature");
userTempField.addEventListener("keyup", function(event){
	if (event.which === 13) {
	let clear = document.getElementById("final-temperature");
	clear.innerHTML = "";
	tempFinal();
	}
});


// // This function should determine which conversion should
// // happen based on which radio button is selected.



// // Assign a function to be executed when the button is clicked
// tempButton.addEventListener("click", getValue);

//=========================================
	//RESET BUTTON
//=========================================
// let resetButton = document.getElementById("reset-btn");
// console.log( "resetButton", resetButton );

// resetButton.addEventListener("click", function(){

// 	document.getElementById("temp-form").reset();

// });