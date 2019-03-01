

var li = document.getElementById("aa");

li.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase()==="li"){
    console.log(event.target,1);
  }else if(event.target.tagName.toLowerCase()==="a"){
    console.log(event.target,3);
  }
  console.log(event.currentTarget,2);
},false)

for(var i = 0; i<li.children.length;i++){
  li.children[i].addEventListener("click",function(event){
    event.stopPropagation();
  })

}

// for(var i = 0;i<li.children.length;i++){
//   li.children[i].addEventListener("click",function(event){
//     event.stopPropagation();
//   })
// }