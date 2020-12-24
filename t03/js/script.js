let splited, splitedTwo, set;

const obj = {
  words: "newspapers newspapers books magazines radio",
};

function addWords(obj, wrds) {
  splited = obj.words.replace(/\s+/g, " ").trim().split(" ");
  splitedTwo = wrds.replace(/\s+/g, " ").trim().split(" ");
  set = new Set([...splited, ...splitedTwo]);
  set = Array.from(set).join(" ");
  return (obj.words = set);
}

// addWords(obj, "radio newspapers ");
// console.log(obj); // {words: "newspapers books magazines radio"}

function removeWords(obj, wrds) {
  splited = obj.words.replace(/\s+/g, " ").trim().split(" ");
  splitedTwo = wrds.replace(/\s+/g, " ").trim().split(" ");
  set = new Set([...splited]);
  for (let x of splitedTwo) set.delete(x);
  set = Array.from(set).join(" ");
  return (obj.words = set);
}

// removeWords(obj, "newspapers books  radio");
// console.log(obj); // {words: "books magazines"}

function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
}

changeWords(obj, "books radio magazines", "tv internet");
console.log(obj); // {words: "tv internet"}

// // console.log(obj); // {words: "newspapers newspapers books magazines"}
//  addWords(obj, 'radio newspapers ');
// //console.log(obj); // {words: "newspapers books magazines radio"}
// console.log (addWords(obj, 'radio newspapers '));
