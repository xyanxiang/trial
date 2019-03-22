function assignKey(type, elem) {
  if (window.event) // IE, Opera, Safari, Chrome
  {
    if (window.event.keyCode == 13) {
      switch (type) {
        case "button":
          document.getElementById("access1").accessKey = elem.value;
          break;
        case "text":
          document.getElementById("access2").accessKey = elem.value;
          break;
        case "table":
          document.getElementById("myTable").accessKey = elem.value;
        case "checkbox":
          document.getElementById("checkPoint").accessKey = elem.value
      }
      return false;
    }
  }
}

function addEvent(elem,evtType,func){
  if(elem.addEventListener){
    elem.addEventListener(evtType,func,false);
  } else if(elem.attachEvent){
    elem.attachEvent("on"+evtType,func);
  } else {
    elem["on" + evtType] = func;
  }
}

addEvent(window,"load",function(){
  var set_Attribute = document.all["formInput"].childNodes[0];
  console.log(set_Attribute.canHaveChildren);
})