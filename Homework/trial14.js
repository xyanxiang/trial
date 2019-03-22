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
  addEvent(document.getElementById("main"),"mouseover",function(evt){
    showArrival(evt);
  });
  addEvent(document.getElementById("main"),"mouseout",function(evt){
    showDeparture(evt);
  });
})

function showArrival(evt){
  evt = (evt)?evt:((window.event)?window.event:null);
  if(evt.target.nodeType == 1){
    if(evt.relatedTarget!=evt.target.firstChild){
      var direction = (evt.relatedTarget.firstChild)?evt.relatedTarget.firstChild.nodeValue:"parts unknown";
      window.status = "Arrived from : "+direction;
      console.log(status);
    }
  }
}

function showDeparture(evt){
  evt = (evt)?evt:((window.event)?window.event:null);
  if(evt.target.nodeType == 1){
    if(evt.relatedTarget !=evt.target.firstChild){
      var direction = (evt.relatedTarget.firstChild)?evt.relatedTarget.firstChild.nodeValue:"parts unknown";
      window.status = "Departed to: " + direction;
      console.log(status);
    }
  }
}