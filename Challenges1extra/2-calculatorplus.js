/* Calculator Plus

Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

   calculator("suma",10,5,2,3) // 20
   calculator("resta",10,5,1) // 4
   calculator("multiplicacion",10,5,2) // 100
   calculator("division",10,5) // 2 */

// juanma resolution

function calculatorPlus () {
  var operation = arguments[0]
  var result = arguments[1]
  var totalElements = arguments.length
  var operand
  for (var i = 2; i < totalElements; i++) {
    operand = arguments[i]
    if (operation === 'suma') result += operand
    if (operation === 'resta') result -= operand
    if (operation === 'multiplication') result *= operand
    if (operation === 'division') result /= operand
  }
  return result
}
calculatorPlus()

// function calculator ('operation', )

function calculator2 () {
  var result = arguments[1]
  switch (arguments[0]) {
    case 'suma':
      for (i = 2; i < arguments.length; i++) {
        result += arguments[i]
      }
      return result
    case 'resta':
      for (i = 2; i < arguments.length; i++) {
        result -= arguments[i]
      }
      return result
    case 'multiplication':
      for (i = 2; i < arguments.length; i++) {
        result *= arguments[i]
      }
      return result
    case 'division':
      for (i = 2; i < arguments.length; i++) {
        result /= arguments[i]
      }
      return result
    default :
      console.log('this operation is not valid')
  }
}
calculator2('suma', 10, 20, 30, 40, 50)
