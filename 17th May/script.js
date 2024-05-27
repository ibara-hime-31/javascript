function delayedGreeting(name, delay){
    setTimeout(()=>{
        document.getElementById("demo").innerHTML= `Hello, ${name}!`
    },delay);
}
delayedGreeting("Pragya",2000);


function countdown(seconds){
    let count=seconds;
    setInterval(display,1000);
    function display(){
        if(count>=0)
        document.getElementById("demo1").innerHTML=count;
    else document.getElementById("demo1").innerHTML="Countdown complete!";
        count--;

    }
}
countdown(5);

function countdown(seconds){
    let timer=setInterval(function(){
        if(seconds==0){
            clearInterval(timer);
            console.log("Countdown complete!");
        }
        else {
            console.log(seconds);
            seconds--;
        }
    },1000)
}
countdown(5);
function repeatMessage(message,numberOfTimes){
    setInterval(display,1000);
    function display(){
        if(numberOfTimes>0) 
            document.getElementById("demo2").innerHTML+=message+"<br>";
        numberOfTimes--;
    }
} 
repeatMessage("Hello",3);

function repeatMessage(message,times){
    let count=0;
    function displayMessage(){
        console.log(message);
        count++;
        if(count==times){
            clearInterval(timer)
        }
        let timer=setInterval(displayMessage,1000);
    }
}

repeatMessage("Hello",3);