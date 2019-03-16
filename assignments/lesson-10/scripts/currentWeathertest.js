var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonRespObj = JSON.parse(weatherRequest.responseText);

    document.getElementById('currenttemp').innerHTML = jsonRespObj.main.temp;
    document.getElementById('humidity').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('currentcondition').innerHTML = jsonRespObj.weather.description;
    document.getElementById('windspeed').innerHTML = jsonRespObj.wind.speed;
}