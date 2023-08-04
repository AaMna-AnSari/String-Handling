// Write a js program to count total number of vowels and  consonants in a string.

function findVowels(str) {
  let vowels = 0;
  let consonants = 0;
  str = str.toLowerCase();
  for (let char of str) {
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
      ? vowels++
      : consonants++;
  }
  return { consonants, vowels };
}
let string = "LoveYourselfFirst";
console.log(findVowels(string));
