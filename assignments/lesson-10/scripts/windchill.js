
    var t = parseInt(document.getElementById("currenttemp").innerHTML);
    var s = parseInt(document.getElementById("windspeed").innerHTML); 

function windChill(){
    return Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16));
}

document.getElementById("windChillFormula").innerHTML=windChill();
