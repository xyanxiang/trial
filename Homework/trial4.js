// initialize the page when loading finished;

window.addEventListener('load',initialize);

function initialize(){
  if(document.getElementById){
    var form = document.getElementById("theForm");
    if(form){
      form.addEventListener('submit',checkForm);
    }
  }
}
function checkForm(evt){
  if(!evt) evt = window.event;

  for(var i = 0; i< this.elements.length; i++){
    if(this.elements[i].type == "text" && this.elements[i].value== ""){
      alert("fill all fields");
      if(evt.preventDefault) evt.preventDefault();
      return false;
    }
  }
return true;

   
}




