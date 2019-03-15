function addEvent(elem,evtType,func){
  if(elem.addEventListener){
    elem.addEventListener(evtType,func,false);
  } else if(elem.attachEvent){
    elem.attachEvent("on"+evtType,func);
  } else{
    elem["on"+evtType] = func;
  }
}

addEvent(window,"load",function(){
  addEvent(document.getElementById("scratchpad"),"keydown",function(evt){
    clearEm();showCode("down",evt);
  })
  addEvent(document.getElementById("scratchpad"),"keypress",function(evt){
    showCode("press",evt);
  })
  addEvent(document.getElementById("scratchpad"),"keyup",function(evt){
    showCode("up",evt);
  })
})

function showCode(which,evt){
  document.forms[0].elements[which+"Char"].value = evt.charCode;
  document.forms[0].elements[which+"Key"].value = evt.keyCode;
}

function clearEm(){
  for(var i = 0; i<document.forms[0].elements.length;i++){
    document.forms[0].elements[i].value = "";
  }
}