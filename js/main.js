//No1
let arr = ["I", "study", "js", "right", "now"];
let deleteArr = arr.shift();
console.log(arr);
console.log(deleteArr);

//No2
function add(word) {
  const wordStr = String(word);
  const addStr = wordStr.split("").reverse().join("");
  return String(addStr);
}
console.log(add("salom dunyo"));

//No3
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " true");
  } else {
    console.log(num + " false");
  }
}
evenOrOdd(2);
evenOrOdd(3);
