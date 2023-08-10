
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

function copyClipboard() {
    let copyText = document.getElementById("output").innerHTML;
    let myEl = document.createElement('div');

    navigator.clipboard.writeText(copyText);
    
    myEl.className = 'bg-zinc-500 flex justify-center absolute mb-[395px] w-auto h-auto px-2 py-1 text-xs text-white rounded-xl';
    myEl.innerHTML = 'Copied - ' + displayOut;
    document.body.appendChild(myEl);
    console.log("out");
    setTimeout(function() {
        myEl.remove();
      }, 2500);
  }

