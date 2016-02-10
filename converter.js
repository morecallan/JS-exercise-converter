// Select User input
var toConvert = document.getElementById("toConvert").value;
console.log("toConvert", toConvert);



// T(°C) = (T(°F) - 32) × 5/9
function toCelsius (fValue) {
    var cValue = (fValue - 32) * (5/9);
    return cValue;
}

// T(°F) = T(°C) × 9/5 + 32
function toFahrenheit (cValue) {
    var fValue = (cValue * (9/5)) + 32;
    return fValue;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
button.onclick = determineConverter;


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);