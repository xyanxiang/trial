
// window.addEventListener('load',initialize);

// function initialize(){
//  if(document.getElementById){
//    document.getElementById("theForm").addEventListener('submit',calcFactorial);
//  }
// }

// function calcFactorial(evt){
//   if(!evt){
//     evt = window.event;
//   }

//   var oInput = document.getElementById("input");
//   var oOutput = document.getElementById("output");

//   if(oInput && oOutput){
//     oOutput.value = factorial(oInpput.value);
//   }

//   if(evt.preventDefault) evt.preventDefault();
//   return false;
// }

// function factorial(n){
//   if(n>0){
//     return n*(factorial(n-1));
//   } else{
//     return 1;
//   }
// }

// function countMe() {
//   var count = 1;
//   var showCount = function () { alert(count) };
//   count++;
//   return showCount;
// }

// var countamatic = countMe();
// document.getElementById('searchForInput').onclick = countamatic();

// function wakeupCaller(name,roomnum){
//   return function(){
//     alert("Call " + name + " in room #" + roomnum + ".")
//   }
// }

// var wakeWilson = wakeupCaller("Mr.Wilson",515);

// setTimeout(wakeWilson,6000);

var  myAlien = new Alien();

// function Alien(){
//   this.name = "Clyde";
//   this.aggressive = true;
// }
function Alien(name,aggressive){
  this.name = name;
  this.aggressive = aggressive;
}

var alien1 = new Alien("James",false);
var alien2 = new Alien("Wheels",true);

console.log(alien1.home);


