var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonRespObj = JSON.parse(weatherRequest.responseText);
    console.log(jsonRespObj.weather[0].description);

    document.getElementById("currenttemp").innerHTML = jsonRespObj.main.temp;
    document.getElementById('humidity').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('currentcondition').innerHTML = jsonRespObj.weather[0].description;
    document.getElementById('windspeed').innerHTML = jsonRespObj.wind.speed;
    document.getElementById('windChillFormula').innerHTML=windChill();
}

var t = document.getElementById("currenttemp").innerHTML;
var s = document.getElementById('humidity').innerHTML;

function windChill(){
return Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16));
}

document.getElementById("windChillFormula").innerHTML=windChill();