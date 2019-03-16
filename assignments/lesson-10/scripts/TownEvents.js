var townEvents = document.querySelector('div.townEvents');
var eventsReqObj = new XMLHttpRequest();
eventsReqObj.open ('GET',  'https://byui-cit230.github.io/weather/data/towndata.json', true);
eventsReqObj.send();

eventsReqObj.onload = function() {
    var  newTownInfo = JSON.parse(eventsReqObj.responseText);
    showEvents(newTownInfo);
}

function showEvents(newTownInfo) {
    var towns = newTownInfo["towns"];
    for(var i = 0; i < towns.length; i++) {
        if (towns[i].name === "Preston") {
            var events = towns[i].events;
            for(var n = 0; n < events.length; n++){
                var myArticle = document.createElement('p');
                myArticle.textContent = events[n];
                townEvents.appendChild(myArticle);
            }
        }
    }
      
}
