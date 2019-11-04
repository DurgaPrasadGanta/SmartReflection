let capture;
let width = 640 ;
let height = 480 ;
let Bweather;
let rSlider, gSlider, bSlider;
let fontBold;

let temperature = 0;
// We're going to store text about the weather
let weather = "";

let json;

function preload() {
  // The URL for the JSON data (replace "imperial" with "metric" for celsius)
  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url);

}

function setup() {
createCanvas(width, height);
  capture = createCapture(VIDEO);
capture.size(520, 440);
capture.hide();

  temperature = json.main.temp;

  // Grab the description, look how we can "chain" calls.
  weather = json.weather[0].description;
  
}

function draw() {

  background(200);
  translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip x-axis backwards
  image(capture, 0, 0, width, height);

  translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip back to normal


  weatherr = createImg('https://i.imgur.com/OPVPKh7.png');
weatherr.position(10,235); document.getElementById("weatherr").addEventListener("click",temperatur);
weatherr.mousePressed(temperatur);
  
 
  Playbutton = createImg('https://i.imgur.com/7qshlSV.png');
Playbutton.position(10,300);
Playbutton.mousePressed(playAudio);
  
 Pausebutton = createImg('https://img.icons8.com/metro/26/000000/stop.png');
Pausebutton.position(10,360);
Pausebutton.mousePressed(pauseAudio);

  button = createImg('https://i.imgur.com/j71bxyg.png');
button.position(560,470);
button.mousePressed(settings);

  button = createImg('https://i.imgur.com/lU3P86x.jpg');
button.position(430,320);
button.mousePressed(settings);

  button = createImg('https://i.imgur.com/vil7H9s.png');
button.position(565,230);
  
  button = createImg('https://i.imgur.com/Eh84pkY.png');
button.position(560,520);
button.mousePressed(widgets);

  button = createImg('https://i.imgur.com/wBEYhak.png');
button.position(560,570);
button.mousePressed(youtube);

  button = createImg('https://i.imgur.com/DM0TD8c.png');
button.position(560,600);
button.mousePressed(facebook);  

mn=minute();
hr=hour();
sc=second();
  d=day();
  m=month();
  y=year();
  fill(255);
textSize(28);
  text( m+'/'+d+'/'+y,425,80);
  fill(255);
textSize(28);
  text( hr+':'+mn+':'+sc,425,50);
fill(0);
textSize(25);
  text( 'Hello Alexa!',250,25);
  fill(0);
textSize(24);
  text( 'Synced to OnePlus',200,50);
  textSize(25);
 // text('Day Mode',250,70);
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

function temperatur(){
  alert(temperature+" °C  \n"+weather);
  
/*loadJSON('https://api.openweathermap.org/data/2.5/forecast?q=Lubbock,us&APPID=89865a36aac515e4d383e822e4662c5b&units=metric',getweather);*/
}

function settings() {
/*  button = createImg('https://i.imgur.com/11Ezh1S.jpg');
button.position(120,75);
button.mousePressed(settings);*/
   //Settings Slider
rSlider = createSlider(0, 255, 0);
rSlider.position(300, 20);
gSlider = createSlider(0, 255, 0);
gSlider.position(300, 50);
bSlider = createSlider(0, 255, 0);
bSlider.position(300, 80);

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);

}

function widgets() {
  console.log("Widgets coming soon")
}

function facebook() {
  console.log("Facebook coming soon")
}


function youtube() {
  console.log("Youtube coming soon")

}
