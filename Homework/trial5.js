function checkWhich(evt) {
  evt = (evt) ? evt : ((event) ? event : null);
  if (evt) {
    var thingPressed = "";
    var elem = (evt.target) ? evt.target : evt.srcElement;
    if (elem.type == "textarea") {
      thingPressed = (evt.charCode) ? evt.charCode : evt.keyCode;
    }
    else if (elem.type == "button") {
      if (evt.type == "mouseover") {
        elem.style.backgroundColor = "blue";
        elem.value = "mouse is over button";
      } else if (evt.type == "mousedown") {
        elem.style.backgroundColor = "red";
        elem.value = "mouse down incur button clicked";
      } else if (evt.type == "mouseup") {
        elem.style.backgroundColor = "darkred";
        elem.value = "mouse up incur button unclicked"
      } else if (evt.type == "mousemove") {
        elem.style.backgroundColor = "ligtred";
        elem.value = "mouse move incur mouse moving"
      } else if (evt.type == "mouseout") {
        elem.style.backgroundColor = "yellow";
        elem.value = "mouse is out now";
        
      }
      thingPressed = (typeof evt.button != "undefined") ? evt.button : "n/a";
    } else if (elem.type == "text") {
      if (evt.type == "keydown") {
        elem.style.backgroundColor = "green";
      } else if (evt.type == "keypress") {
        elem.style.backgroundColor = "red";
      } else if (evt.type == "keyup") {
        elem.style.backgroundColor = "grey";
      } else if (evt.type == "scroll") {

      } else if (evt.type == "select") {
          alert("text content is being marked ")
      }
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
  addEvent(document.getElementById("errorButton"), "keypress",
    function (evt) { checkWhich(evt); });
  addEvent(document.getElementById("errorButton"), "keydown",
    function (evt) { checkWhich(evt); });
  addEvent(document.getElementById("errorButton"), "keyup",
    function (evt) { checkWhich(evt); });
  addEvent(document.getElementById("errorButton"), "select", function (evt) { checkWhich(evt); });
  addEvent(document.forms[0], "reset", function (evt) { checkWhich(evt); });
  addEvent(document.forms[0].resetButton, "click",
    function () {
      this.form.reset();
    });
  addEvent(window, "resize", function (event) {
    // if(event.altKey == 1){

      alert("Window is resizing");
    // }
   
  });
  addEvent(window, "scroll", function () {
    // alert("window is scrolling");
  })
  addEvent(document.getElementById("textContainer"),"mousedown",function(){
    alert("event is now at " + event.target.tagName+" named by " + event.target.id+" level ")
  })
  addEvent(document.getElementById("textBox"),"mousedown",function () {
    //  event.cancelBubble = true;
    event.stopPropagation();
     alert("event is now at " + event.target.tagName +" named by " + event.target.id +" level ")
     console.log(event.offsetX);
     console.log(event.offsetY);
     console.log(event.clientX);
     console.log(event.clientY);
     console.log(event.screenX);
     console.log(event.screenY);
     console.log(event.x);
     console.log(event.y);
    });
    addEvent(document.getElementById("pillarBox"),"mousedown",function(){
      console.log(event.clientX);
      console.log(event.clientY);
      // event.clientX + document.body.scrollLeft;
      // event.clientY + document.body.scrooTop;
    })
});
