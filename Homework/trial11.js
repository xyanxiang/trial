function checkCoords(evt) {
  var form = document.forms["output"];
  var targText, targElem;
  if (evt.target.nodeType == 3) {

    targText = "[textnode] inside <" +
      evt.target.parentNode.tagName + ">";
    targElem = evt.target.parentNode;
    console.log(targText);
    console.log(targElem);
  }
  else {
    targText = "<" + evt.target.tagName + ">";
    targElem = evt.target;
    console.log(targText);
    console.log(targElem);
  }
  form.srcElemTag.value = targText;
  form.clientCoords.value = evt.clientX + "," + evt.clientY;
  form.clientScrollCoords.value = (evt.clientX + window.scrollX) +
    "," + (evt.clientY + window.scrollY);
  form.layerCoords.value = evt.layerX + "," + evt.layerY;
  form.pageCoords.value = evt.pageX + "," + evt.pageY;
  form.inElemCoords.value =
    (evt.pageX - targElem.offsetLeft - document.body.offsetLeft) +
    "," + (evt.pageY - targElem.offsetTop - document.body.offsetTop);
  form.screenCoords.value = evt.screenX + "," + evt.screenY;
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
  addEvent(document.body, "mousedown",
    function (evt) { checkCoords(evt); });
});