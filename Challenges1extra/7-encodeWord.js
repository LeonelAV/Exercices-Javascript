/* encodeWord

Define a function called encodeWord that
receives a string and return the codified
version of that string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O */

function encodeWord (value) {
  return value.replace(/T/g, 7).replace(/A/g, 4).replace(/S/g, 5).replace(/O/, 0)
}
encodeWord('TrAStaSSOonT')
