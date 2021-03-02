let ps = document.querySelectorAll('.trafficLights>div>p');
let colors = ['red', 'yellow', 'green'];

let interval = setInterval(trafficLights,1000)

function trafficLights(){
    let now = new Date();
    let nowSec = now.getSeconds();
    let nowHour = now.getHours();
    if(nowHour < 6 || nowHour > 20){
        if(nowSec%2==0){
            ps[1].classList.add(colors[1])
        }
        else {
            ps[1].classList.remove(colors[1])
        }
        return
    }
    if(nowSec >= 0 && nowSec <= 28){
        ps[0].classList.add(colors[0]);
    }
    else{
        ps[0].classList.remove(colors[0]);
    }
    if((nowSec >= 26 && nowSec <= 28) || (nowSec >= 58 && nowSec <= 59)){
        ps[1].classList.add(colors[1]);
    }
    else{
        ps[1].classList.remove(colors[1]);
    }
    if(nowSec >= 29 && nowSec <= 57){
        ps[2].classList.add(colors[2]);
    }
    else{
        ps[2].classList.remove(colors[2]);
    }
    if(nowSec == 54 || nowSec == 56){
        ps[2].classList.remove(colors[2]);
    }
}
    
