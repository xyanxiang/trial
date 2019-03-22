function addEvent(elem, evtType, func) {
  if (elem.addEventListener) {
    elem.addEventListener(evtType, func, func);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + evtType, func);
  } else {
    elem["on" + evtType] = func;
  }
}

addEvent(window, "load", function () {
  addEvent(document.body, "mousedown", function (evt) {
    hightlight(evt);
  });
  addEvent(document.body, "mouseup", function (evt) {
    restore(evt);
  });
})



function hightlight(evt) {
  // var evtTwo = document.createEvent("mouseEvents");
  // evtTwo.initEvent("mousedown", true, true);
  // document.getElementById("lastTextNode").dispatchEvent(evtTwo);
  // var elem = (evt.target.nodeType == 3) ? evt.target.parentNode : evt.target;

  if (elem.className == "bold") {
    document.styleSheets[0].cssRules[0].style.color = "red";
  }
  else {
    elem.style.color = "#FFCC00";
  }
}

function restore(evt) {
  var elem = (evt.target.nodeType == 3) ? evt.target.parentNode : evt.target;
  if (elem.className == "bold") {
    document.styleSheets[0].cssRules[0].style.color = "black";
  }
  else {
    elem.style.color = "black";
  }
}