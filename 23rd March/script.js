function name(){
    console.log("Hello class");
}
name();

//single line arrow function---when the code of the function contains one line only
const name2=()=>console.log("Hello class");
name2()
//arrow function
const name1=(val)=>{
    console.log("Hello " + val);
}
name1("John");
//always use const and not let or var for arrow function
name1("Pragya");
name1("Yashi");

const display=(fname,lname)=>{
    console.log(fname + " " + lname);
};
display("Pragya","Malaiya");

const add=(x,y)=>console.log(x+y);
add(3,4);

const addition=(x,y)=>{
    return x+y;
};
document.getElementById("demo").innerHTML=addition(3,4);

let num1=prompt("Enter first number: ");
console.log(num1);
let num2=prompt("Enter second number: ");
console.log(num2);

const multiply=(x,y)=>{
    return x*y;
};
let output=multiply(num1,num2);
console.log(output);

document.getElementById("demo").innerHTML=output;

const display1=()=>{
    alert("Welcome to js class");
};