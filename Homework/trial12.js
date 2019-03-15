
function processEvent(evt) {
  var currTargTag, msg;
  if (evt.currentTarget.nodeType == 1) {
    currTargTag = "<" + evt.currentTarget.tagName + ">";
  }
  else {
    currTargTag = evt.currentTarget.nodeName;
  }
  msg = "Event is now at the " + currTargTag + " level ";
  msg += "(" + getPhase(evt) + ").";
  alert(msg);
}
// reveal event phase of current event object
function getPhase(evt) {



  switch (evt.eventPhase) {
    case 1:
      return "CAPTURING";
      break;
    case 2:
      return "AT TARGET";
      break;
    case 3:
      return "BUBBLING";
      break;
    default:
      return "";
  }
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
  // using old syntax to assign bubble-type event handlers
  document.onclick = processEvent;
  document.body.onclick = processEvent;
  // turn on click event capture for document and form
  document.addEventListener("click", processEvent, true);
  document.forms[0].addEventListener("click", processEvent, true);
  // set bubble event listener for form
  document.forms[0].addEventListener("click", processEvent, false);
  // turn on event capture for the button
  document.getElementById("main1").addEventListener("click",
    processEvent, true);
});