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
  var ButtonOne = document.input.colorAllButton;
  addEvent(ButtonOne, "click", function (evt) { colorAll(evt) });
  var ButtonTwo = document.input.colorChildButton;
  addEvent(ButtonTwo, "click", function (evt) { colorChildBearing(evt) });
  var ButtonReset = document.input.resetButton;
  addEvent(ButtonReset, "click", function (evt) { history.go(0) });
  var InputButton = document.Input.InputButton;
  addEvent(InputButton, "click", function (evt) { toggleSpecialStyle('head1') });
  var showButton = document.getElementById("showButton");
  addEvent(showButton, "click", function (evt) { showLogo(evt) });
  var editButton = document.getElementById("editBtn");
  addEvent(editButton, "click", function (evt) { toggleEdit(evt) });
  addEvent(editButton, "focus", function (evt) { this.blur(); })
  console.log(document.input.childNodes);
});

function toggleEdit(evt) {
  var newState = document.getElementById("editableText").contentEditable;
  if (newState == false || newState == "false" || newState == "inherit") {
    newState = true;
  } else {
    newState = false;
  }
  document.getElementById("editableText").contentEditable = newState;
  document.getElementById("editableText").className = (newState) ?
    "editing" : "normal";
  document.getElementById("editBtn").innerHTML = (newState) ?
    "Disable Editing" : "Enable Editing";
}

function showLogo(evt) {
  var paragraphW = document.getElementById("myDIV").clientWidth;
  console.log(paragraphW);
  var paragraphH = document.getElementById("myDIV").clientHeight;
  console.log(paragraphH);
  // correct for Windows/Mac discrepancies
  var paragraphTop = (document.getElementById("myDIV").clientTop) ?
    document.getElementById("myDIV").clientTop :
    document.getElementById("myDIV").offsetTop;
  console.log(paragraphTop);
  console.log(evt.pageY);
  console.log(evt.clientY);
  console.log(evt.clientY + document.documentElement.scrollTop);
  console.log(document.getElementById("myDIV").clientTop);
  console.log(document.getElementById("myDIV").clientLeft);

  var logoW = document.getElementById("logo").style.pixelWidth;
  // center logo horizontally against paragraph
  document.getElementById("logo").style.pixelLeft = (paragraphW - logoW) / 2;
  // position image immediately below end of paragraph
  document.getElementById("logo").style.pixelTop = paragraphTop + paragraphH;
  document.getElementById("logo").style.visibility = "visible";
}


function colorAll(evt) {
  evt = (evt) ? evt : ((window.event) ? window.event : null);
  if (evt) {
    var elems = document.getElementsByTagName("*");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.color = "red";
    }
  }
}

function colorChildBearing(evt) {
  evt = (evt) ? evt : ((window.event) ? window.event : null);
  if (evt) {
    var elems = document.getElementsByTagName("*");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.color = "red";
    }
  }
}

function toggleSpecialStyle(elemId) {
  var elem = (document.all) ? document.all(elemId) : document.getElementById(elemId);
  if (elem.className == "") {
    elem.className = "special";
  } else {
    elem.className = "";
  }
};
