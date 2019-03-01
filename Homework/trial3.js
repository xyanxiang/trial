

var parent= document.getElementById("parent");
var son1 = document.getElementById("son1");
var son2 = document.getElementById("son2");

parent.addEventListener("click",function(event){
  alert(1);
  // event.stopPropagation();
},true)

son1.addEventListener("click",function(event){
  // event.stopPropagation();
  alert(2)
},true)

son2.addEventListener("click",function(event){
  alert(3);
},true)
