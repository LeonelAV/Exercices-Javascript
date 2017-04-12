// CalculatorPlus -slide44



function calculatorPlus() {
	var operation = arguments[0]
	var result = arguments[1]
	var totalElements = arguments.length;
	var operand;
	for (var i=2; i<totalElements; i++) {
		operand = argument[i];
		if(operation === "suma") result += operand
		if(operation === "resta") result -= operand
		if(operation === "multiplication") result *= operand
		if(operation === "division") result /= operand
	}
	return result;
}