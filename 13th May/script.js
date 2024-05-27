function display(){
    document.getElementById("demo").innerHTML="Question 1";
    document.getElementById("demo").style.color="blue";
}


function mul(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("demo1").innerHTML="The Result is: <br>" + (num1*num2);
}

function div(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("demo1").innerHTML="The Result is: <br>" + (num1/num2);
}


function GenerateP(){
    let s="";
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    for(let i=1;i<=8;i++){
        let index=Math.floor(Math.random()*char.length+1 );
        s+=char.charAt(index);
    }
    return s;
}
function display1(){
    document.getElementById("demo2").innerHTML=GenerateP();
}

function signOfProduct(num1, num2,num3){
    let product=num1*num2*num3;
    let sign;
    if(product>0) sign="positive";
    else if (product<0) sign="negative";
    else sign="zero";
    return sign;
}
alert(signOfProduct(23,45,-8));


function isBlank(str){
    return !str.trim();
}
console.log(isBlank(""));
console.log(isBlank("   "));
console.log(isBlank("Hello"));
console.log(isBlank("   Hello   "));


function rectangle_area(width,height){
    return width*height;
}
console.log(rectangle_area(4,5));


function Capitalize(str){
    return str.split(" ").map(x=>{
        return x.charAt(0).toUpperCase() + x.substr(1);
    }).join(" ");
}
console.log(Capitalize("cybrom technology bhopal"));


function color(c){
    document.body.style.backgroundColor=c;
}