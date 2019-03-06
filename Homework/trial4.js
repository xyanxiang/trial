// initialize the page when loading finished;

window.onload = initialize;

function initialize(){
  if(document.getElementById){
    var oEntry = document.getElementById("entry");
    var oButton = document.getElementById("do-it");
    if(oEntry&&oButton){
      oButton.addEventListener("click",doIt);
    }
  }
}

function doIt(){
  var oEntry = document.getElementById('entry');
  oEntry.value = oEntry.value.initialCaps();
}

String.prototype.initialCaps = function(){
  var sText = this.toString();
  console.log(sText);

  var aWords = sText.split('');
  console.log(aWords);
  var sInitial = aWords[0].charAt(0);
    var sReminder = aWords[0].substr(1);
    aWords[i] = sInitial.toUpperCase() + sReminder.toLowerCase();
  // for(var i = 0; i<aWords.length;i++){
  //   var sInitial = aWords[i].charAt(0);
  //   var sReminder = aWords[i].substr(1);
  //   aWords[i] = sInitial.toUpperCase() + sReminder.toLowerCase();
  // } 
 return aWords.join(' ');
}




















