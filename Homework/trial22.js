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
  var toggleBtn = document.all["toggleBtn"];
  addEvent(toggleBtn, "click", function (evt) { toggleComplete(evt) });
  var PrevBtn = document.all["Prev"];
  addEvent(PrevBtn, "click", function (evt) { prevField(evt) });
  var NextBtn = document.all["Next"];
  addEvent(NextBtn, "click", function (evt) { nextField(evt) });
})

function toggleComplete() {
  if (document.getElementById("buttonWrapper").className == "") {
    document.getElementById("display").dataSrc = "#rights_raw";
    document.getElementById("display").dataFld = "column1";
    document.getElementById("display").dataFormatAs = "text";
    document.getElementById("buttonWrapper").className = "hiddenControl";
    console.log(document.getElementById("display").filters[])
 
  }
  else {
    document.getElementById("display").dataSrc = "#rights_html";
    document.getElementById("display").dataFld = "Article1";
    document.getElementById("display").dataFormatAs = "HTML";
    document.getElementById("buttonWrapper").className = "";
  }
}

function nextField() {
  var elem = document.getElementById("display");
  var fieldName = elem.dataFld;
  var currFieldNum = parseInt(fieldName.substring(7, fieldName.length), 10);
  currFieldNum = (currFieldNum == 10) ? 1 : ++currFieldNum;
  elem.dataFld = "Article" + currFieldNum;
}
function prevField() {
  var elem = document.getElementById("display");
  var fieldName = elem.dataFld;
  var currFieldNum = parseInt(fieldName.substring(7, fieldName.length), 10);
  currFieldNum = (currFieldNum == 1) ? 10 : --currFieldNum;
  elem.dataFld = "Article" + currFieldNum;
}
