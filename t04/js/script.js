// concat(string1, string2) : string
// concat(string1) : func1 
// func1.count : number

function concat(string1, string2) {
    
   if (string2)
        return string1 + " " + string2;
    
    function subStr() {
        let str = prompt("Enter your string");
        subStr.count++;
        return  string1 + " " + str;
    } 
    subStr.count = 0; 
    return subStr;
}

// let phrase1 = concat("Hulk", "smash!");
// let output = phrase1;
// console.log(output);
// // Hulk smash!
// let phrase2 = concat("Leave");
// output = phrase2();
// // a prompt appears. Enter "Hulk alone!" into the prompt
// console.log(output);
// // Leave Hulk alone!
// console.log(phrase2.count);
// // 1
// output = phrase2();
// // a prompt appears. Enter "me alone, please!" into the prompt
// console.log(output);
// // Leave me alone, please!
// output = phrase2();
// // a prompt appears. Enter "HULK ALONE!" into the prompt
// console.log(output);
// // Leave HULK ALONE!
// console.log(phrase2.count);
// // 3
// let phrase3 = concat("Go");
// output = phrase3();
// // a prompt appears. Enter "away!" into the prompt
// console.log(output); // Go away!
// console.log(phrase3.count);
// // 1
// console.log(phrase2.count); // 3