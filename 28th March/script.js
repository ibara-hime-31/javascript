function display(){
    alert("Hello your code is running!");
}
let x=document.getElementById("mybtn")
x.addEventListener("click",function(){
    alert("This is an addEventListener event");
})
x.addEventListener("mousemove",myfunction);

function myfunction(){
    document.getElementById("demo").innerHTML=Math.random();
}

function remove(){
    x.removeEventListener("mousemove",myfunction);
}
function result(){
    let y=document.getElementById("myinput").value ;
    document.getElementById("demo").innerHTML=y;
}
let z=document.getElementById("inputbox");
z.addEventListener("change",function(){
    let p=document.getElementById("inputbox").value ;
    document.getElementById("demo").innerHTML=p;
})