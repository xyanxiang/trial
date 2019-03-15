var outer = document.getElementById('outer');
var inner = document.getElementById('inner');
outer.addEventListener('click', function (event) {
  console.log('event.target.id:' + event.target.id+ " "+getPhase(event));
  console.log('event.currentTarget.id:' + event.currentTarget.id+" "+getPhase(event) );
})

function getPhase(evt){
    switch (evt.eventPhase)
    {
      case 1:
      return "CAPTURING";
      break;
      case 2:
      return "AT TARGET";
      break;
      case 3:
      return "BUBBLING";
      break;
    }
}

