
var timer;
function setupDrag() {
  if (event.srcElement.tagName != "TD") {
    // don’t allow dragging for any other elements
    event.returnValue = false;
  }
  else {
    // setup array of data to be passed to drop target
    var passedData = [event.srcElement.innerText, event.srcElement.className];
    // store it as a string
    event.dataTransfer.setData("Text", passedData.join(":"));
    event.dataTransfer.effectAllowed = "copy";
    timer = new Date();
  }
}
function timeIt() {
  if (event.srcElement.tagName == "TD" && timer) {
    if ((new Date()) - timer > 2000) {
      alert("Sorry, time is up. Try again.");
      timer = 0;
    }
  }
}
function handleDrop() {
  var elem = event.srcElement;
  var passedData = event.dataTransfer.getData("Text");
  var errMsg = "";
  if (passedData) {
    // reconvert passed string to an array
    passedData = passedData.split(":");
    if (elem.id == "blank1") {
      if (passedData[1] == "noun") {
        event.dataTransfer.dropEffect = "copy";
        event.srcElement.innerText = passedData[0];
      }
      else {
        errMsg = "You can’t put an adjective into the noun placeholder.";
      }
    }
    else if (elem.id == "blank2") {
      if (passedData[1] == "adjective") {
        event.dataTransfer.dropEffect = "copy";
        event.srcElement.innerText = passedData[0];
      }
      else {
        errMsg = "You can’t put a noun into the adjective placeholder.";
      }
    }
    if (errMsg) {
      alert(errMsg);
    }
  }
}
function cancelDefault() {
  if (event.srcElement.id.indexOf("blank") == 0) {
    event.dataTransfer.dropEffect = "copy";
    event.returnValue = false;
  }
}