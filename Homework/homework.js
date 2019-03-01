
// add event to window object

window.onload = initialize;

//define initialize function

function initialize(){
   // check if window is dom-aware
  if(window.document.getElementById){
    // pointer to the Open button and Close button
    var OpenMenu = document.getElementById("Login");
    var CloseMenu = document.getElementById("Register");

    OpenMenu.onclick = OpenWindow;
    CloseMenu.onclick = CloseWindow;

  }
    



}

var newWindow;

OpenWindow = function(){
  
  newWindow = window.open("http://www.taobao.com","def","height=300,width = 300");
  
  newWindow.moveTo(document.body.clientWidth,document.body.offsetTop);

}

CloseWindow = function(){
  if(newWindow){
    newWindow.close();
    newWindow = null;
  }
 

  

  
}

