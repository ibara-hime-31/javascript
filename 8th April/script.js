// const myinterval=setInterval(display,500);
// //display is a callback function and an asynchronous function
// //the setinterval method calls a function at specefied intervals(in milliseconds)
// //setinterval method calls the function continuosly until clearInterval is called or window is closed.
// function display(){
//     document.getElementById("demo").innerHTML+="Hello";
// }

// function stop(){
//     clearInterval(myinterval);
// }


const myinterval=setTimeout(display,3000);
function display(){
    document.getElementById("demo").innerHTML="Happy Birthday";
}

const myinterval1=setInterval(display1,500);
function display1(){
    document.getElementById("demo1").innerHTML+="Cybrom";
}
function stop1(){
    clearInterval(myinterval1);
}

const mytimer=setInterval(timer,1000);
function timer(){
    const date= new Date();
    document.getElementById("demo2").innerHTML= date.toLocaleTimeString();
}

function stop2(){
    clearInterval(mytimer);
}
let count=0;
const delay=setInterval(display2,500);
function display2(){
    count+=1;
    document.getElementById("demo3").innerHTML=count;
}
function stop3(){
    clearInterval(delay);
}