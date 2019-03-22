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
  addEvent(document.getElementById("scratchpad"), "keypress",
    function (evt) { calcSpeed(evt); });
});
var stamp;
function calcSpeed(evt) {
  if (stamp) {
    var gross = evt.timeStamp - stamp;
    var wpm = Math.round(6000 / gross);
    document.getElementById("wpm").firstChild.nodeValue = wpm + "wpm."
  }
  stamp = evt.timeStamp;
}