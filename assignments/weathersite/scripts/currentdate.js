var isActive = false;
function currentDate() {
    var theDate = new Date();
    var weekdayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return todaysDate = weekdayArray[theDate.getDay()] + ', ' + theDate.getDate() + ' ' + monthArray[theDate.getMonth()] + ' ' + theDate.getFullYear();
}
document.getElementById("currentDate").innerHTML = currentDate();


document.getElementsByClassName("js-menu")[0].onclick = function() {
    if(isActive) {
        document.getElementsByClassName("js-menu")[0].classList.remove("active");
        document.body.classList.remove("menu-open");
        document.getElementsByClassName("largenav")[0].style.display="none";
    }else{
        document.getElementsByClassName("js-menu")[0].classList.add("active");
        document.body.classList.add("menu-open");
        document.getElementsByClassName("largenav")[0].style.display="inline-block";
    }
    
	isActive = !isActive;
};

