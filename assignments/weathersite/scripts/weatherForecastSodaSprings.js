var townForecast = document.getElementsByClassName('5dforecast')[0];
var forecastReqObj = new XMLHttpRequest();
forecastReqObj.open ('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=4be1b10ef53688f60ff2ca4c1518caab&units=Imperial', true);
forecastReqObj.send();

forecastReqObj.onload = function() {
    var  dailyWeatherForecast = JSON.parse(forecastReqObj.responseText);
    showForecast(dailyWeatherForecast);
}

function showForecast(jsonObj) {
    var forecastList = jsonObj['list'];
    var headerRow = document.createElement("tr");
    var contentRow = document.createElement("tr");
    var contentRow2 = document.createElement("tr");
    for (var i = 0; i < forecastList.length; i++) {
        if (forecastList[i].dt_txt.includes("18:00:00")) {
            var myTh = document.createElement("th");
            var myTd = document.createElement("td");
            var myTd2 = document.createElement("td");
            var iconImage = document.createElement("img");

            var d = new Date(forecastList[i].dt_txt);

            myTh.textContent = dayOfTheWeek(d.getDay());
            myTd.textContent = forecastList[i].main.temp;
            iconImage.src = "https://openweathermap.org/img/w/" + forecastList[i].weather[0].icon + ".png";
            iconImage.alt = forecastList[i].weather[0].description;
            myTd2.appendChild(iconImage);
            headerRow.appendChild(myTh);
            contentRow.appendChild(myTd);
            contentRow2.appendChild(myTd2);
        }
    }
    townForecast.appendChild(headerRow);
    townForecast.appendChild(contentRow);
    townForecast.appendChild(contentRow2);
}
function dayOfTheWeek(d) {
    switch(d) {
        case 0: 
            return "Sunday";
        case 1:
            return "Monday";
        case 2: 
            return "Tuesday"
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";

    }    
}