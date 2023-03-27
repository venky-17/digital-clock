
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();



   
    
    if(hrs >= 12){
        session = "PM";}
        else{
            session = "AM";
        }

    if (hrs > 12) {
            hrs = hrs - 12;
        }
    
    if(hrs === 0){
        hrs = 12;
    }
    
    if(min < 10) {
        min = "0" + min;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById("session").innerHTML = session;
  
}

setInterval(displayTime, 10);
