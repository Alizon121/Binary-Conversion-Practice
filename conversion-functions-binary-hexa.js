/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/

/* Base 10 to base 2 */
function decimalToBinary(num) {
// Convert a base 10 integer into a binary number (ase-2)
// Formula: divide the integer by number base and keep track of the remainder.

let base = '0b'

// Need to iterate over the num by dividng by 2 and then see if there is aremainder -> add remainder to the string.
// Or use the toString() method and specify the base:

let newStr = num.toString(2)

return base += newStr
}

/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {



  
}

/* Base 2 to base 10 */
function binaryToDecimal(blob) {
  // Your code here 
}

/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {
  // Your code here 
}

// console.log('Decimal to binary:')
console.log(decimalToBinary(13))  // '0b1101'
// console.log(decimalToBinary(72))  // '0b1001000'
// console.log('')

// console.log('Decimal to hexadecimal:')
// console.log(decimalToHexadecimal(9))   // '0x9'
// console.log(decimalToHexadecimal(32))  // '0x20'
// console.log('')

// console.log('Binary to decimal:')
// console.log(binaryToDecimal('0b0101'))      // 5
// console.log(binaryToDecimal('0b10001000'))  // 136
// console.log('')

// console.log('Hexadecimal to decimal:')
// console.log(hexadecimalToDecimal('0x51'))    // 81
// console.log(hexadecimalToDecimal('0x10ff'))  // 4351


module.exports = {
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  hexadecimalToDecimal
}
