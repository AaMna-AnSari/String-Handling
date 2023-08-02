// Write a js program to find reverse of a string.

// use Expression function

let revString = function (str) {
  let stringInArray = str.split("");
  console.log(stringInArray);

  let reverseOfArray = stringInArray.reverse();
  console.log(reverseOfArray);

  let result = reverseOfArray.join("");
  console.log(result);
};

// testing
let string = "Love YourSelf First";
console.log(revString(string));
