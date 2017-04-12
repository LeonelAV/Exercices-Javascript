/*Multiplications table on demand

Write a function that writes in the console the multiplication 
table (in one column) of any number passed as parameter*/

function onDemand(x){
	var result=''
	for(i=1; i<=x;i++){
		result = x*i;
		console.log(result)
	}
}


