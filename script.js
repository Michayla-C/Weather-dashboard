var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function gettingJSON(){
    document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ee6596241130f193adf1ba90e625cc10",function(json){
        document.write(JSON.stringify(json));
    });
}

    (function myFunction() {
        var d = document, s = d.createElement('script');
        s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();

window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector:".weatherWidget",
    apiKey:"M3MLNLPS4YAZRAUFENTW395ZX", //Personal API Key
    location:"Sydney, NSW, Australia", //Location
    unitGroup:"metric", //Metric units
    forecastDays:5, //Days forecast show
    title:"This Weeks Weather", //Title Shown
    showTitle:true, 
    showConditions:true
});

const express = require('express');
const api = express();
api.listen(3000, () => {
  console.log('API up and running!');
});
api.get('/', (req, res) => {
  console.log(req);
  res.send('Hello, world!');
});