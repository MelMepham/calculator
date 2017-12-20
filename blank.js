let calcKeys = document.getElementsByClassName('buttons') //
for (let myKey in calcKeys) {
  if (calcKeys[myKey].localName === 'button') {
    calcKeys[myKey].addEventListener('click', function() {useButton(calcKeys[myKey].value)}, false)
  }
}
}

const DIGITS    = '01234567890.'
const OPCODES   = '+-*/% x2 sr pm'


function useButton(buttonCode) {
if (buttonCode === 'AC') { // All Clear
  calc.reset()
  return
}
if (buttonCode === 'CE') { // Clear Entry
  clearEntry()
  return
}
if (DIGITS.includes(buttonCode)) { // 0123456789 and .
  addDigit(buttonCode)
  return
}
if (OPCODES.includes(buttonCode)) { // + - * / % +/- square and square root
  addOpcode(buttonCode)
  return
}
if (buttonCode === '=') { // Equals
  doMath()
  return
}
}
