// Function Declaration

function sum(para1,para2,para3){
    return para1 + para2 + para3;
}

//Function call
sum(1,2,3);
sum(20,10,100);
console.log(sum);
let result=sum(20,10,100);
console.log(result);
console.log(sum(20,10,100));


document.getElementById("demo").innerHTML=sum(20,10,100);
document.write(result);
window.alert(result);


function cube(num){
    return num*num*num;
}
let r=cube(4);
document.getElementById("demo").innerHTML=r;
document.write(r);

display("John","Doe");
console.log(display("John","Doe"));

function display(fname,lname){
    return fname + " " + lname;
};

//hoisting- functions move to the top of the page by default



//Function expression-do not move to the top of code
//console.log(display1("Johnny","Lever"));------gives error
const display1=function(fname, lname){
    return fname + " " + lname;
};
console.log(display1("Johnny","Lever"));

let num1=3;
let num2=4;
let num3=5;

function multiply(a,b,c){
    return a*b*c;
}
let res=multiply(num1,num2,num3);
console.log(res);
