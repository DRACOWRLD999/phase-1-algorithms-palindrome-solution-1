function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  define a function called isPalindrome that takes in a word
  create a variable called reversedWord and set it equal to the word split into an array, reversed, and joined back into a string
  return whether the word is equal to the reversedWord
*/

/*
  Add written explanation of your solution here
  I used the split, reverse, and join methods to reverse the word and then checked if it was equal to the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
