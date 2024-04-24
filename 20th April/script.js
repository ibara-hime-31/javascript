const x= new Date();
//const d=x.getDate();
//const d=x.getDay();
//const d=x.getHours();
//const d=x.getMinutes();
//const d=x.getSeconds();
const d=x.getMilliseconds();
document.getElementById("demo").innerHTML=d;


//Creating array (array literal)

const myarray= ["Bmw","Ford","Nissan","Kia","Tata"];
console.log(myarray);
console.log(myarray[0]);
console.log(myarray[1]);
console.log(myarray[2]);
console.log(myarray[3]);
console.log(myarray[4]);

const newArray= new Array(34,56,89,34);
console.log(newArray);

const display=()=>{
    console.log("Hello");
};
const array1= ["john",34,{name:"Sanjana",age:23},display];

console.log(array1);
console.log(array1[0]);
console.log(array1[2].name);


const array2=[{id:0,course:"react",price:35000},
{id:1,course:"python",price:34000},
{id:2,course:"Javascript",price:20000}];

console.log(array2);

const fruits=["banana","mango","grapes","watermelon","apple"];
const w=fruits.length;
console.log(w);

// let fruit=fruits[0];
let fruit= fruits[fruits.length-1];
document.getElementById("demo").innerHTML=fruit;