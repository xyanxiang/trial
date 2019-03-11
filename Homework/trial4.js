
function Planet(name, diameter, distance, year, day, photo) {
  
  this.name = name;
  this.diameter = diameter;
  this.distance = distance;
  this.year = year;
  this.day = day;
  this.photo = photo;
  this.showPlanet = function () {
    var result = "<html><body><center><table border='2' cellpadding ='2'>";
    result += "<caption align='top'>Planetary data for <b>"
      + this.name + "</b></caption>";
    result += "<tr><td align='right'>Diameter</td><td>"
      + this.diameter + "</td></tr>";
    result += "<tr><td align='right'>Distance from Sun</td><td>"
      + this.distance + "</td></tr>";
    result += "<tr><td align='right'>One Orbit Around Sun</td><td>"
      + this.year + "</td></tr>";
    result += "<tr><td align='right'>One Revolution (Earth Time)</td><td>"
      + this.day + "</td></tr>";
    result += "</table></center>";
    + "</body></html>";
    document.write(result);
    document.close();
  }

}

function Photo(name, URL, copyright, refNum) {
  this.name = name;
  this.URL = URL;
  this.copyright = copyright;
  this.refNum = refNum;
}


MercuryPhoto = new Photo("Planet Mercury", "./images/Img/Mercury.png", "(c) 1990 NASA", 28372);
JupitorPhoto = new Photo("Planet Jupitor", "./images/Img/Jupiter.png", "(c) 1990 NASA", 28302);
MarsPhoto = new Photo("Planet Mars", "./images/Img/Mars.png", "(c) 1990 NASA", 28373);
EarthPhoto = new Photo("Planet earth", "./images/Img/Earth.png", "(c) 1990 NASA", 28375);
NeptunePhoto = new Photo("Planet Neptune", "./images/Img/Neptune.png", "(c) 1990 NASA", 28377);
SaturnPhoto = new Photo("Planet Saturn", "./images/Img/Saturn.png", "(c) 1990 NASA", 28378);
UranusPhoto = new Photo("Planet Uranus", "./images/Img/Uranus.png", "(c) 1990 NASA", 28379);
VenusPhoto = new Photo("Planet Mercury", "./images/Img/Venus.png", "(c) 1990 NASA", 28371);
PlutoPhoto = new Photo("Planet Mercury", "./images/Img/Pluto.png", "(c) 1990 NASA", 28374);
var photos = new Array(
  MercuryPhoto, VenusPhoto, EarthPhoto, MarsPhoto, JupitorPhoto, SaturnPhoto, UranusPhoto, NeptunePhoto, PlutoPhoto
);
var mercury = new Planet("Mercury", "3100 miles", "36 million miles",
  "88 days", "59 days", MercuryPhoto);
var venus = new Planet("Venus", "7700 miles", "67 million miles",
  "225 days", "244 days", VenusPhoto);
var earth = new Planet("Earth", "7920 miles", "93 million miles",
  "365.25 days", "24 hours", EarthPhoto);
var mars = new Planet("Mars", "4200 miles", "141 million miles",
  "687 days", "24 hours, 24 minutes", MarsPhoto);
var jupiter = new Planet("Jupiter", "88,640 miles", "483 million miles",
  "11.9 years", "9 hours, 50 minutes", JupitorPhoto);
var saturn = new Planet("Saturn", "74,500 miles", "886 million miles",
  "29.5 years", "10 hours, 39 minutes", SaturnPhoto);
var uranus = new Planet("Uranus", "32,000 miles", "1.782 billion miles",
  "84 years", "23 hours", UranusPhoto);
var neptune = new Planet("Neptune", "31,000 miles", "2.793 billion miles",
  "165 years", "15 hours, 48 minutes", NeptunePhoto);
var pluto = new Planet("Pluto", "1500 miles", "3.67 billion miles",
  "248 years", "6 days, 7 hours", PlutoPhoto);


var planetImg = document.getElementById("planetPhoto")
function doDisplay(popup) {
  i = popup.selectedIndex;
  // eval(popup.options[i].text.toLowerCase() + ".showPlanet()");
  planetImg.src = photos[i].URL;
  
}
planetImg.onclick = showInfor;

function showInfor(){
  var x = document.forms[0].planetsList.selectedIndex;
  console.log(document.forms[0].planetsList.options[x])
    eval(document.forms[0].planetsList.options[x].innerText.toLowerCase() + ".showPlanet()");
}
var firstNameInput = document.getElementById("firstName").value;
var lastNameInput = document.getElementById("lastName").value;

var person = {
  firstName:"John",
  lastName:"Kis",
  get fullName(){
    return this.firstName + " " + this.lastName;
  },
  set fullName(name){
    var words = name.toString().split(' ');
   
    this.firstName = words[0] || '';
    this.lastName = words[1] || '';

  }
}

var submitButton = document.forms[0].submitButton;
submitButton.onclick = submitFunction;
person.fullName = firstNameInput +" "+lastNameInput;
function submitFunction(){
   if(person.fullName){
     alert("This guy's full name is " + person.firstName +" "+ person.lastName)
   }
}











