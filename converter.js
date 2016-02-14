var output = document.getElementById("output");


// T(°C) = (T(°F) - 32) × 5/9
function toCelsius (fValue) {
    var cValue = (fValue - 32) * (5/9);
    output.innerHTML = cValue;
    colorOutput("c", cValue);
    return cValue;
}

// T(°F) = T(°C) × 9/5 + 32
function toFahrenheit (cValue) {
    var fValue = (cValue * (9/5)) + 32;
    output.innerHTML = fValue;
    colorOutput("f", fValue);
    return fValue;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Check output to apply coloring.
function colorOutput (type, value) {
    if ((type === "c" && value > 32) || (type === "f" && value > 90)) {
        output.style.color = "red";
    } else if ((type === "c" && value < 0) || (type === "f" && value < 32)) {
        output.style.color = "blue";
    } else {
        output.style.color = "green";
    }
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    var toConvert = document.getElementById("toConvert").value;
    if (document.getElementById("F").checked) {
        toFahrenheit(toConvert);
    } else if (document.getElementById("C").checked) {
        toCelsius(toConvert);
    } else {
        alert("Please select either Fahrenheit or Celsius to convert to.");
    }
}



// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
