function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
async function myDigitalClock(){
    var date= new Date();
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var zone = "AM"

    // while(1){
        seconds += 1
        if (seconds >= 60){
            seconds = 0
            minutes += 1
        }
        if (minutes >= 60){
            minutes=0
            hours += 1
        }
        if (hours > 12){
            hours -= 12
            zone = "PM"
        }else if(hours == 0){
            zone="AM"
        }
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(hours+":"+minutes+":"+seconds+" "+zone)
        // await sleep(1000)
    // }
}
setInterval(myDigitalClock, 1000);
myDigitalClock()