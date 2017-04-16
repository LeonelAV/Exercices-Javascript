/*randomLargest()

Randomizes three numbers in range (0.. 100) and prints the largest one.*/

function randomLargest() {
	var random1 = Math.floor(Math.random()*100)+1
	var random2 = Math.floor(Math.random()*100)+1
	var random3 = Math.floor(Math.random()*100)+1
	if (random1 > random2) {
		return random1
	} else if (random2 > random3){
		return random2
	} else {
		return random3
	}

}

randomLargest()

// if you want to check all the numbers we can just creat outside the function three global variables
// one for each number and than define the variables localy(inside the function without the var)
// and ask for the value after we run the function
