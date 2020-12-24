"use strict"

let outText = document.getElementsByClassName('output')[0];
let inputText = document.getElementById('inputText');

let getInputVal = () => {

    if ( !inputText.value)
        alert(`It's empty. Try to input something in "Text input".`);
    else {
        if (outText.value === "[Empty]") {
            outText.value = "";
        }
        outText.value += `--> ${inputText.value}\n`;
        document.cookie = `name=${inputText.value}; max-age=30; path=/`;
        inputText.value = "";
    }
}

let resetOutputVal = () => {
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
        document.cookie = "name=;max-age=0";
        console.log(document.cookie);
        outText.value = "";
        outText.value = "[Empty]";
    }
}