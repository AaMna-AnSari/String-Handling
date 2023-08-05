//  Write a js program to find highest frequency character in a string.

// solution

let highFrequency = (str) => {
  let highestFrequency = {};
  for (let key of str) {
    if (key.match(/a-zA-Z/g)) {
      key = key.toLowerCase();
      highestFrequency[key] = (highestFrequency[key] || 0) + 1;
    }
  }

  let highestFrequencyChar = "";
  let highestFreq = 0;
  for (let key in highestFrequency) {
    if (highFrequency[key] > highestFreq) {
      highestFreq = highestFrequency[key];
      highestFrequencyChar = key;
    }
  }

  return highestFrequencyChar;
};

let string = "Inside a book I am not free";
console.log(highFrequency(string));
