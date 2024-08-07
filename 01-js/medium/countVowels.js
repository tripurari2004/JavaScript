/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowel = ["a","e","i","o","u"]
  let totalVowel=0;
  let alpha = str.toLowerCase().split("")
  for(let i=0;i<vowel.length;i++){
    for(let j=0;j<alpha.length;j++){
      if(vowel[i]==alpha[j]){
        totalVowel+=1;
      }
    }
  }

  return totalVowel;
}

module.exports = countVowels;