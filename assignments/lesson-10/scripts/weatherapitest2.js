var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'http:/api.openweathermap.org/data/2.5/weather?zip=84302,us&appid=4be1b10ef53688f60ff2ca4c1518caab', true);
weatherObj.send();

weatherObj.onload = function() {
    var jsonRespObj = JSON.parse(weatherObj.responseText);
    console.log(jsonRespObj);

    document.getElementById("curr-City").innerHTML = jsonRespObj.name;
}
