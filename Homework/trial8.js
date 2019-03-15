function addEvent(elem, evtType, func) {
  if (elem.addEventListener) {
    elem.addEventListener(evtType, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + evtType, func);
  } else {
    elem["on" + evtType] = func;
  }
}

addEvent(window, "load", function () {
  addEvent(document.getElementById("scratchpad"), "keydown", function (evt) {
    clearEm();showCode("down", evt);
  });
  addEvent(document.getElementById("scratchpad"), "keypress", function (evt) {
    showCode("press", evt);
  });
  addEvent(document.getElementById("scratchpad"), "keyup", function (evt) {
    showCode("up", evt);
  });
  addEvent(document.getElementById("address"),"click",function(evt){
    checkIt(evt);
  })
})

function showCode(which, evt) {
  evt = (evt) ? evt : ((event) ? event : null);
  if (evt) {
    document.forms[0].elements[which].value = evt.keyCode;
  }
}
function clearEm() {
  for (var i = 0; i < document.forms[0].elements.length; i++) {
    document.forms[0].elements[i].value = "";
  }
}
function checkIt(evt){
  evt = (evt)?evt:((event)?event:null);
  // if(evt){
  //   var charCode = evt.keyCode;
  //   if(charCode>65){
  //     alert("This is not key to be checked");
  //     event.returnValue = false;
  //   }
  // }
  if(evt.altKey&&evt.shiftKey&&evt.ctrlKey){
    evt.returnValue = true;
  } else{
    evt.returnValue = false;
  }
}

