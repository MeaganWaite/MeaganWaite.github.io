var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5780993&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonRespObj = JSON.parse(weatherRequest.responseText);

    document.getElementById("tempSLC").innerHTML = jsonRespObj.main.temp;
}

var weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4180439&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest2.send();

weatherRequest2.onload = function() {
    var jsonRespObj2 = JSON.parse(weatherRequest2.responseText);

    document.getElementById("tempAtlanta").innerHTML = jsonRespObj2.main.temp;
}

var weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest3.send();

weatherRequest3.onload = function() {
    var jsonRespObj3 = JSON.parse(weatherRequest3.responseText);

    document.getElementById("tempSeattle").innerHTML = jsonRespObj3.main.temp;
}

var weatherRequest4 = new XMLHttpRequest();
weatherRequest4.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5368361&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest4.send();

weatherRequest4.onload = function() {
    var jsonRespObj4 = JSON.parse(weatherRequest4.responseText);

    document.getElementById("tempLA").innerHTML = jsonRespObj4.main.temp;
}