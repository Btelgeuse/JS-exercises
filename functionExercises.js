// Resource: https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

// Exercise 1: Write a JavaScript function that reverses a number.

function reverseNumber(numberStr) {
  let reversedNb = "";
  numberStr = numberStr.toString();
  let numberArray = numberStr.split("");
  for (let i = numberArray.length - 1; i >= 0; i--) {
    reversedNb += numberArray[i];
  }

  console.log(reversedNb);
}

reverseNumber(1234);
