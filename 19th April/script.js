const x=new Date()
let y=new Date(2022,5); // month = normal month-1
console.log(y);
y= new Date("2022-10-20");  //month =normal month
console.log(y);

// date string 
y=new Date("November 24, 2018 10:34:50");
console.log(y);

//new date object passing milliseconds
y=new Date(1000000000000);
console.log(y);
y=new Date(0);
console.log(y);
// Jan 01,1970 is used as reference
y=new Date(-1000000000000);
console.log(y);


//methods of new date object
y=new Date();
document.getElementById("demo").innerHTML=y.toUTCString();

document.getElementById("demo1").innerHTML=y.getMonth(); //(0 to 11)
document.getElementById("demo2").innerHTML=y.getFullYear();
console.log(y.getDate());


//array of months==string form
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const d=months[y.getMonth()];
document.getElementById("demo").innerHTML=d;
