/* sum() & multiply()

Define a function sum() and a function multiply() that sums and 
multiplies (respectively) all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/

function sum(x1, x2, x3, x4){
	var myArray =[x1, x2, x3, x4]
	var result =0; 
	for(i=0; i<myArray.length; i++){
		result += myArray[i]
	}
	return result;
}

