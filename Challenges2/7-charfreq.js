/*charFreq()

Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
 Represent the frequency listing as a Javascript object.
 Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").*/


 function charFreq (text) {
   var freqs = {}
   function eachChar (c) {
     freqs[c] = freqs[c] + 1 || 1
   }
   text.split('').forEach(eachChar)
   return freqs
 }

 // Test
 charFreq('abbabcbdbabbdbabababcbcbab')

