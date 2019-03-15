

function checkCoords(evt) {
  evt = (evt) ? evt : ((window.event) ? window.event : null);
  if (evt) {
    var elem = (evt.target) ? evt.target : evt.srcElement;
    var form = document.forms[0];
    form.srcElemTag.value = "<" + elem.tagName + ">";
    form.clientCoords.value = evt.clientX + "," + evt.clientY;
    // if (typeof document.body.scrollLeft != "undefined") {
      form.pageCoords.value = (evt.clientX +
        document.documentElement.scrollLeft) +
        "," + (evt.clientY + document.documentElement.scrollTop);
    // }
    form.offsetCoords.value = evt.offsetX + "," + evt.offsetY;
    form.screenCoords.value = evt.screenX + "," + evt.screenY;
    form.xyCoords.value = evt.x + "," + evt.y;
    if (elem.offsetParent) {
      form.parElem.value = "<" + elem.offsetParent.tagName + ">";
    }
    return false;
  }
}
function handleSize(evt) {
  evt = (evt) ? evt : ((window.event) ? window.event : null);
  if (evt) {
    document.forms[0].resizeCoords.value =
      evt.clientX + "," + evt.clientY;
  }
}
// bind the event handlers
function addEvent(elem, evtType, func) {
  if (elem.addEventListener) {
    elem.addEventListener(evtType, func, true);
  }
  // else if (elem.attachEvent) {
  //   elem.attachEvent("on" + evtType, func);
  // }
  // else {
  //   elem["on" + evtType] = func;
  // }
}
addEvent(window, "load", function () {
  addEvent(document.body, "mousedown",
    function (evt) { checkCoords(evt); });
  addEvent(document.body, "resize",
    function (evt) { handleSize(evt); });
});
