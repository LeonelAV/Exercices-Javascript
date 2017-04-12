/*translate()

Write a function translate() that will translate a text into "rövarspråket". 
That is, double every consonant and place an occurrence of "o" in between. 
For example, translate("this is fun") should return the string "tothohisos isos fofunon".*/


function translate(text){
	
	for(var i=0; i<text.length; i++){
	  if(text.indexOf(i) === -1){
		return noConsonant.indexOf[i] + "o" + noConsonant
	  }
	}
}