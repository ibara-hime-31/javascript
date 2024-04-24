//Math.trunc() method returns the integer part of a number
let x=Math.trunc(134.67678);
document.getElementById("demo").innerHTML=x;

//Math.sign() static method returns 1 or -1 depending on the sign of the number(positive and negative respectively). When 0 or -0 is entered, it returns 0 and -0 respectively.

let y=Math.sign(-45);
console.log(y);
document.getElementById("demo").innerHTML=y;


//Math.pow() returns the value of a base raised to a power.

let z=Math.pow(2,4);
console.log(z);
document.getElementById("demo1").innerHTML=z;

let p=Math.sqrt(81);
console.log(p);
document.getElementById("demo2").innerHTML=p;
let q=Math.abs(-81);
console.log(q);
document.getElementById("demo3").innerHTML=q;

//Math.ceil() method rounds a number rounded up to the nearest integer

// let r=Math.ceil(15.3);
let r=Math.ceil(-5.1);
console.log(r);
document.getElementById("demo4").innerHTML=r;


let u=Math.floor(-5.1);
console.log(u);
document.getElementById("demo4").innerHTML=u;

let k=Math.min(5,10,3,100,30);
console.log(k);
document.getElementById("demo5").innerHTML=k;

let e=Math.max(5,10,3,100,30);
console.log(e);
document.getElementById("demo5").innerHTML=e;


//Math.random() method returns a random floating point number between 0(inclusive) and 1(exclusive)
// let w=Math.random();
let w=10*Math.random();
//returns a random number between 0 and 10
console.log(w);
document.getElementById("demo6").innerHTML=w;