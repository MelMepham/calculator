document.addEventListener('DOMContentLoaded', start)

function start() {
  addEventListeners()
}

const NUMS = "0123456789"
const OPS = "+-/*"
var eq = []
var total = 0


function addEventListeners() {
  var buttons =  document.getElementsByClassName('numBtn')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {useButton(e.target.value)}, false)
  }
}

function useButton(calcNum) {
  if (calcNum === "AC") {
    calc.reset()
    return
  }
  if (calcNum === NUMS) { // create string of numbers, add string to var eq
    console.log(calcNum)
  }
  if (calcNum === OPS) { // add math equation to string

  }
  if (calcNum === "=") { // run math (string [a][b][c])- log result to id:results
    doMath()
    return
  }
}


function doMath() {

}
