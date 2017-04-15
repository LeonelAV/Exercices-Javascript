/*Calculator

Define a function called calculator that 
receives an operation and two numbers and returns
 the result of the operation applied to the values passed as parameters*/

function calculator (operation, a, b) {
  if (operation === 'suma') {
    console.log(a + b)
  } else if (operation === 'resta') {
    console.log(a - b)
  } else if (operation === 'multiplication') {
    console.log(a * b)
  } else if (operation === 'division') {
    console.log(a / b)
  } else {
    console.log('this operation is not valid')
  }
}
calculator()

// Another way to do

function calculator1 (operation, a, b) {
  switch (operation) {
    case 'suma':
      console.log(a + b)
      break
    case 'resta':
      console.log(a - b)
      break
    case 'division':
      console.log(a / b)
      break
    case 'multiplication':
      console.log(a * b)
      break
    default:
      console.log('This operation is not valid')
  }
}
calculator1('suma', 10, 35)
