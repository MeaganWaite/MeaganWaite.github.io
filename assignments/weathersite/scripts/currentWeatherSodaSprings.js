var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonRespObj = JSON.parse(weatherRequest.responseText);
    console.log(jsonRespObj.weather[0].description);

    document.getElementById("currenttempSS").innerHTML = jsonRespObj.main.temp;
    document.getElementById('humiditySS').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('currentconditionSS').innerHTML = jsonRespObj.weather[0].description;
    document.getElementById('windspeedSS').innerHTML = jsonRespObj.wind.speed;
    document.getElementById('windChillFormula').innerHTML=windChill();
}



function windChill(){
    var t = document.getElementById("currenttempSS").innerHTML;
    var s = document.getElementById('windspeedSS').innerHTML;
    var chill = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16));
    if (t>50 && s <3) {
        return "";
    }
    return chill; 
}

document.getElementById("windChillFormula").innerHTML=windChill();