
var states = new Array(4);
states[0] = "Florida";
states[1] = "California";
states[2] = "Arizona";
states[3] = "Alabama";

var stateFoundationYear = new Array(4);

stateFoundationYear[0] = 1978;
stateFoundationYear[1] = 1838;
stateFoundationYear[2] = 1888;
stateFoundationYear[3] = 1777;


var button = document.forms[0].searchForInput;

button.onclick = checkResult;

function checkResult() {

  var inputValue = document.forms[0].inputArea.value;

  for (var i = 0; i < states.length; i++) {
    if (states[i] == inputValue) {
      break;
    }
  }
  alert(states[i] + " " + " was founded in " + " " + stateFoundationYear[i]);
}

var form = document.forms[0];

form.onchange = checkInputValue;

function checkInputValue() {

  if (document.forms[0].inputArea) {
    if (form.inputArea.value != null && form.inputArea.value != "") {
      var value = form.inputArea.value
      if (confirm("input area is not empty")) {
        location.href = "http://www.baidu.com";
      } else {
        if (prompt("Is this what you just typed", value)) {
          alert("you just typed" + " " + value)
        } else {
          return;
        }

      }
    }
  }

}

