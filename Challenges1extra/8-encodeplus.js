/*encodeWordPlus

Improve the previous function to add a random number between 0 and 1000 every 7 characters */

function encodeWord (value) {
  value = value.replace(/T/g, 7).replace(/A/g, 4).replace(/S/g, 5).replace(/O/, 0)
  value = value.split('')
    for (i=6; i<value.length; i+=7) {
  	value[i] = (Math.floor(Math.random()*1000)+1)
  }
  return value.join('')
}

console.log(encodeWord("TRAOSMNGHORUHBDMK");