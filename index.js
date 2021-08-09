//TODO
// 1. take Array
// 2. Sort Array
// 2.1 swap Array
// 3. Prime Number
// 4. Sum of all prime number

// Import stylesheets
import './style.css';

// Write Javascript code!
//Prime number
var NumberArr = [10, 3, 34, 1, 6, 17, 5];
var maxNumberArr, minNumberArr;
var PrimeArr = [];
var isPrime = false;

//Sort array - Selection Sort
for (var a = 0; a < NumberArr.length; a++) {
  for (var b = 0; b < NumberArr.length; b++) {
    if (a != b) {
      if (NumberArr[a] < NumberArr[b]) {
        //swap numbers
        var temp = NumberArr[a];
        NumberArr[a] = NumberArr[b];
        NumberArr[b] = temp;
      }
    }
  }
}
maxNumberArr = NumberArr[NumberArr.length - 1];
minNumberArr = NumberArr[0];

//Prime Number
for (var a = 0; a < NumberArr.length; a++) {
  for (var b = 2; b < NumberArr[a]; b++) {
    if (a != b) {
      if (NumberArr[a] % b == 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
  if (isPrime) PrimeArr.push(NumberArr[a]);
}

console.log(PrimeArr);
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
