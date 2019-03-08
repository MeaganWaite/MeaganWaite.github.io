
var column = document.querySelector('div.column');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townInfo = request.response;
    showInfo(townInfo);
}

function showInfo(jsonObj) {
    var towns = jsonObj['towns'];

    for(var i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" ||  towns[i].name == "Soda Springs")     
            var myColumn = document.createElement('div.column');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
    
            myH3.textContent = towns[i].name;
            myPara1.textContent = towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].currentPopulation;      
            myPara4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;  

            // myColumn.appendChild(myH3);
            // myColumn.appendChild(myPara1);
            // myColumn.appendChild(myPara2);
            // myColumn.appendChild(myPara3);
            // myColumn.appendChild(myPara4);

            }
    }            
    


