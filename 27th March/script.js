function display(){
    alert("This is an event");
}

// let mybtn=document.getElementById("btn");
// mybtn.addEventListener("click",()=>{
//     alert("This is another event");
// })

document.getElementById("btn").addEventListener("click",display1);
//element.addEventListener("eventtype",callbackfunction,use capture(true/false))
/*function display1(){
    alert("This is another event");
}
*/
//the function in addEventListener is called Immediately Invoked Function(IIFE)

console.log(Date());
let mydate= new Date();
function display1(){
    document.getElementById("demo").innerHTML =mydate;
}