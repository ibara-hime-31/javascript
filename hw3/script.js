document.getElementById("mybtn").addEventListener("click",display);
function display(){
    let age=prompt("Enter your age:");
    if(age>=18){
        document.getElementById("demo").innerHTML="You are eligible";
    }
    else{
        document.getElementById("demo").innerHTML="You are not eligible";
    }
}