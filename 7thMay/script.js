function changeColor(color){
    document.body.style.backgroundColor=color;
}

/*Function to generate combination of password*/
function generateP(){
    var pass="";
    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#!$%&*";

    for(let i=1;i<=8;i++){
        var char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
    }
    return pass;
}
function display(){
    document.getElementById("demo").innerHTML=generateP();
}


function replaceText(){
    var originalText=document.getElementById("originalText").innerHTML;
    var replacedText=originalText.replace(/google/gi,"cybrom");
    document.getElementById("originalText").innerHTML=replacedText;
}


let num1=parseFloat(prompt("Enter first number:"));
let num2=parseFloat(prompt("Enter second number: "));
function add(){
    document.getElementById("demo2").innerHTML=num1+num2;
}
function sub(){
    document.getElementById("demo2").innerHTML=num1-num2;

}
const mul=()=>{
    document.getElementById("demo2").innerHTML=num1*num2;

}
const div=function(){
    document.getElementById("demo2").innerHTML=num1/num2;

}