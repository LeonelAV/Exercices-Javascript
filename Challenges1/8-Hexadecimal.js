/*Hexadecimal

Writes a function that convert a hexadecimal color, "blue" for
 example "#0000FF" in its RGB representation rgb(0,0,255)". Give
  the function the name getRGB() and test it with this code */

function getRgb (hexacolor) {
  var red = parseInt(hexacolor.substring(1, 3), 16)
  var green = parseInt(hexacolor.substring(3, 5), 16)
  var blue = parseInt(hexacolor.substring(5, 7), 16)
  return 'The convertion to rgb is: rgb(' + red + ',' + green + ',' + blue + ').'
}
getRgb('#FFAAEE')
