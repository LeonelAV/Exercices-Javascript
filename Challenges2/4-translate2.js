/*translate()

Represent a small bilingual lexicon as a Javascript object 
in the following fashion {"merry":"god", "christmas":"jul", 
"and":"och", "happy":gott", "new":"nytt", "year":"år"} and 
use it to translate your Christmas cards from English into Swedish.*/

function translate(){
  var message = ''
  var translation =[{english:"merry",swedish:"god"},
						{english:"christmas",swedish:"jul"}, 
						{english:"and",swedish:"och"},
						{english:"happy",swedish:"gott"},
						{english:"new",swedish:"nytt"},
						{english:"year",swedish:"ar"}
]
for(i=0; i<translation.length; i++){
  switch (arguments) {
  	case 'happy':
  	  
  }
}