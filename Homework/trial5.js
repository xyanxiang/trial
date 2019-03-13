function checkWhich(evt) {
  evt = (evt) ? evt : ((event) ? event : null);
  if (evt) {
    var thingPressed = "";
    var elem = (evt.target) ? evt.target : evt.srcElement;
    if (elem.type == "textarea") {
      thingPressed = (evt.charCode) ? evt.charCode : evt.keyCode;
    }
    else if (elem.type == "button") {
      if(evt.type == "mouseover"){
        elem.style.backgroundColor = "blue";
        elem.value = "mouse is over button";
      } else if(evt.type == "mousedown"){
        elem.style.backgroundColor ="red";
        elem.value = "mouse down incur button clicked";
      } else if(evt.type == "mouseup"){
        elem.style.backgroundColor ="darkred";
        elem.value = "mouse up incur button unclicked"
      } else if(evt.type == "mousemove"){
        elem.style.backgroundColor ="ligtred";
        elem.value = "mouse move incur mouse moving"
      } else if(evt.type == "mouseout"){
        elem.style.backgroundColor ="yellow";
        elem.value = "mouse is out now";
      }
      thingPressed = (typeof evt.button != "undefined") ? evt.button : "n/a";
    }

    // alert(thingPressed);
  }
  return false;
}
// bind the event handlers
function addEvent(elem, evtType, func) {
  if (elem.addEventListener) {
    elem.addEventListener(evtType, func, false);
  }
  else if (elem.attachEvent) {
    elem.attachEvent("on" + evtType, func);
  }
  else {
    elem["on" + evtType] = func;
  }
}
addEvent(window, "load", function () {
  addEvent(document.getElementById("button"), "mousedown",
    function (evt) { checkWhich(evt); });
  addEvent(document.getElementById("button"), "mouseover",
    function (evt) { checkWhich(evt); });
    addEvent(document.getElementById("button"), "mousemove",
    function (evt) { checkWhich(evt); });
    addEvent(document.getElementById("button"), "mouseout",
    function (evt) { checkWhich(evt); });
    addEvent(document.getElementById("button"), "mouseup",
    function (evt) { checkWhich(evt); });
  addEvent(document.getElementById("text"), "keypress",
    function (evt) { checkWhich(evt); });
  addEvent(document.getElementById("errorButton"), "change",
    function (evt) { console.log(evt) });
});