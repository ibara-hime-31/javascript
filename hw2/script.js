document .getElementById("btn1").addEventListener("click",display1);
function display1(){
    let x=document.getElementById("demo");
    x.style.color="green";
    x.style.border="2px solid green";
}
document.getElementById("btn2").addEventListener("click",()=>{
    document.getElementById("demo").style.backgroundColor="yellow";
    document.getElementById("demo").style.color="red";
})
document.getElementById("btn3").addEventListener("click",function(){
    document.getElementById("demo").style.borderRadius="50%";
})