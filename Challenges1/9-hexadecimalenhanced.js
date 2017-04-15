/* Hexadecimal enhanced

Improves the previous function so besides the conversion also identifies some basic colors:

Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF
So the result can be (for these cases):

>>> var a = getRGB ('#00FF00') 
>>> a;
“rgb(0,255,0)   verde”; */


function getRGB (hexacolor) {
  var red = parseInt(hexacolor.substring(1, 3), 16)
  var green = parseInt(hexacolor.substring(3, 5), 16)
  var blue = parseInt(hexacolor.substring(5, 7), 16)
  var rgbColor = ' =>The RGB color is: (' + red + ',' + green + ',' + blue + ')'
  switch (hexacolor) {
    case '#000000':
      console.log('The color is black' + rgbColor)
      break
    case '#FFFFFF':
      console.log('The color is white' + rgbColor)
      break
    case '#FF0000':
      console.log('The color is red' + rgbColor)
      break
    case '#00FF00':
      console.log('The color is green' + rgbColor)
      break
    case '#0000FF':
      console.log('The color is blue' + rgbColor)
  }
}
getRGB('#00FF00')
