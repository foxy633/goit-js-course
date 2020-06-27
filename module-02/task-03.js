"use strict";

const findLongestWord = function (string) {
  let arrey = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < arrey.length; i++) {
    if (longestWord.length < arrey[i].length) {
      longestWord = arrey[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
