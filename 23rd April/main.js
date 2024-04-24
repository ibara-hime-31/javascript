//Rest parameter

let display=function(...num1){
    console.log(num1);
};

display(3);
display(4,5);
display(5,6,7,8,9);


let sum=function(x,y,z){
    console.log(x+y+z);
}

const array1=[1,2,3,4,5,6];
sum(...array1);

//Destructuring

const myarray=[1,2,3,4,5,6];
const [a,b,c,d]=myarray;
console.log(a,b,c,d);

const [m,,n,o,p]=myarray;
console.log(m,n,o,p);

const [r,s,t,...num]=myarray;
console.log(a,b,c);
console.log(num);

const person={
    name:"John",
    id:1,
    age:30,
}

const {name,id,age}=person;
console.log(name,id,age);
const{name:username,id:i,age:myage}=person;
console.log(username,i,myage);