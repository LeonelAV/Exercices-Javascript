/*maxOfThree() function

Define a function maxOfThree()
 that takes three numbers as arguments and returns the largest of them.*/

 function maxOfThree(x1, x2, x3){
 	if(x1>x2 && x1>x3){
 		return x1;
 	}
 	else if(x2>x1 && x2>x3){
		return x2;
 	}
 	else{
 		return x3;
 	}
 }
 

 //manera 2
function maxOfThree(a, b, c) {
 	if (a > b && a > c) return a
 	if (b > a && b > c) return b
 	return c
 }

 //manera 3
 function maxOfThree(a, b, c){
 	return Math.max(a, b, c)
 }
