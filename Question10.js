//  Write a js program to count total number of words in a string.
function countWords(string) {
  let words = 0;
  for (let i = 0; i < string.length; i++) {
    words++;
  }
  return words;
}

let str = "LoveYourselfFirst";
console.log(countWords(str));
