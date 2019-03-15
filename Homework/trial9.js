
function addEvent(elem,evtType,func){
  if(elem.addEventListener){
    elem.addEventListener(evtType,func,false);
  }
   else if(elem.attachEvent){
    elem.attachEvent("on"+evtType,func);
  } else{
    elem["on"+evtType] = func;
  }
}

addEvent(window,"load",function(){
  addEvent(document.body,"mousedown",function(evt){
    highlight(evt);
  });
  addEvent(document.body,"mouseup",function(evt){
    restore(evt);
  });
})

function highlight(evt){
  var evt = (evt)?evt:((event)?event:null);
  var elem = evt.srcElement;
  // alert(elem.tagName);
  if(elem.className == "bold"){
    document.styleSheets[0].rules[0].style.color = "red";
  } else{
    elem.style.color = "#FFCC00";
  }
}

function restore(){
  var elem = event.srcElement;
  if(elem.className == "bold"){
    document.styleSheets[0].rules[0].style.color = "";
  }else{
    elem.style.color ="";
  }
}