function showArrival(evt) {
  evt = (evt) ? evt : ((event) ? event : null);
  var direction = (event.fromElement.innerText) ?
    event.fromElement.innerText :
    "parts unknown";
  status = "Arrived from: " + direction;
}
function showDeparture(evt) {
  evt = (evt) ? evt : ((event) ? event : null);
  var direction = (event.toElement.innerText) ?
    event.toElement.innerText :
    "parts unknown";
  status = "Departed to: " + direction;
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
  addEvent(document.getElementById("main"), "mouseover",
    function (evt) { showArrival(evt); });
  addEvent(document.getElementById("main"), "mouseout",
    function (evt) { showDeparture(evt); });
});
