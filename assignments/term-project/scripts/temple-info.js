
var grid = document.querySelector('div.wrapper');
var requestURL ="https://MeaganWaite.github.io/assignments/term-project/json/temples.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var templeInfo = request.response;
    showInfo(templeInfo);
}

function showInfo(jsonObj) {
    var temples = jsonObj['temples'];

    
    
    for(var i = 0; i < temples.length; i++) {
       
            var myGrid = document.createElement('div');
            myGrid.classList.add("grid");
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myPara7 = document.createElement('ul');
            var myPara8 = document.createElement('p');
            var myPara9 = document.createElement('ul');
            var myImg = document.createElement('img');
            if(temples[i].name == "Salt Lake Utah Temple"){
                myImg.src="images/salt-lake-temple-769668-tablet-med.jpg";
                myImg.alt="Salt Lake Utah Temple";                    
            }
            if(temples[i].name == "Los Angeles California Temple"){
                myImg.src="images/los-angeles-temple-759181-tablet-med.jpg";
                myImg.alt="Los Angeles California Temple";
            }
            if(temples[i].name == "Seattle Washington Temple"){
                myImg.src="images/seattle-washington-temple-1079837-tablet-med.jpg";
                myImg.alt="Seattle Washington Temple";
            }
            if(temples[i].name == "Atlanta Georgia Temple"){
                myImg.src="images/atlanta-temple-lds-875956-tablet-med.jpg";
                myImg.alt="Atlanta Georgia Temple";
            }

            myImg.classList.add("mainphotos");
    
            myH3.textContent = temples[i].name;
            myPara1.textContent = 'Address: ' + temples[i].address;
            myPara2.textContent = 'Email: ' + temples[i].email;
            myPara3.textContent = 'Phone Number: ' + temples[i].phone;      
            myPara4.textContent = 'Ordinance Schedule: ' + temples[i].oschedule;  
            myPara5.textContent = 'Session Schedule: ' + temples[i].sschedule; 
            myPara7.textContent = 'Temple Closures:'          
            myPara8.textContent = 'Temple History: ' + temples[i].history;  
            myPara9.textContent = 'Temple Amenities:'       

            var templeClosures = temples[i].closes;

            for(var j = 0; j < templeClosures.length; j++) {
                var listCloses = document.createElement('li');
                listCloses.textContent = templeClosures[j];
                myPara7.appendChild(listCloses);
            }            

            var templeServices = temples[i].services;

            for(var k = 0; k < templeServices.length; k++) {
                var listServices = document.createElement('li');
                listServices.textContent = templeServices[k];
                myPara9.appendChild(listServices);
            }

            myGrid.appendChild(myH3);
            myGrid.appendChild(myPara1);
            myGrid.appendChild(myPara2);
            myGrid.appendChild(myPara3);
            myGrid.appendChild(myPara4);
            myGrid.appendChild(myPara5);
            myGrid.appendChild(myPara7);
            myGrid.appendChild(myPara8);
            myGrid.appendChild(myPara9);
            myGrid.appendChild(myImg);
            grid.appendChild(myGrid);
        
             }
}