console.log("John");
setTimeout(myfunction,3000);
console.log(34);  //setTimeout gets executed afted 2nd clg
function myfunction(){
    document.getElementById("demo1").innerHTML="I belong to Bhopal"
}

setInterval(display,1000);
function display(){
    let d=new Date();
    document.getElementById("demo2").innerHTML= d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();
}