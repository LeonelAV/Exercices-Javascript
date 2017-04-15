/* The replace() can have a function as a new value. And can take  each value to be replaced
as the argument. so for example, in the first 'T' => when it founds the letter knows that have to take that letter
to use in the function that is used to the new value.
See last example in https://www.w3schools.com/jsref/jsref_replace.asp
the '/gi' => case-insensite */


/*Write a function translate() that will translate a text into "rövarspråket". 
That is, double every consonant and place an occurrence of "o" in between. 
For example, translate("this is fun") should return the string "tothohisos isos fofunon".*/

function translate (text) {
  var repl = text.replace(/b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|z/gi, function (x) { return x + 'o' + x;})
    return repl
}
translate('This is fun')


