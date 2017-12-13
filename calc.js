

var buttons =  document.getElementsByClassName('numBtn')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    document.getElementById('results').innerHTML = (e.target.value)
  })
}

function equals() {

}

function add() {

}

function divide() {

}

function subtract() {

}

function multiply() {
  
}
