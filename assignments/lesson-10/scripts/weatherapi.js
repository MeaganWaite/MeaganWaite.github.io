var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonResponseObj = JSON.parse(weatherRequest.responseText);
    console.log(jsonResponseObj);

    document.getElementById('chosenCity').innerHTML = jsonResponseObj.name;
    document.getElementById('currentTemp').innerHTML = jsonResponseObj.main.temp;
}
