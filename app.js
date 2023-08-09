let displayOut = "";
let result = 0;
let element = document.getElementById("output");

function display(input) {
    displayOut += input;
    element.innerHTML = displayOut;
}

function displayOp(input) {
    displayOut += " " + input + " ";
    element.innerHTML = displayOut;
}

function clearDisplay() {
    element.innerHTML = "0";
    displayOut = "";
}

function calculate() {
    if (displayOut == 0 || displayOut == "") 
        return;
    try {
        result = eval(displayOut);
        element.innerHTML = result;
        displayOut = result;
    } catch (error) {
        element.innerHTML = "Error!";
    }
}