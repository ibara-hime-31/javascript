let marks=prompt("enter marks:");

if(marks>90){
    console.log("Excellent");
}
else if(marks>60){
    console.log("Good");
}
else console.log("work harder");

let day;
const date=new Date();
console.log(date.getDay());
switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;  
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;  
    case 6:
        day="Saturday";
        break; 
    default :
        day="not valid";
        break;
}

console.log(day);
document.getElementById("demo").innerHTML=day;


let text=" "
for (let i=0;i<=10;i++){
    console.log(i);
    text+=i+"<br>";
}
document.getElementById("demo").innerHTML=text;


const person={
    fname:"John",
    lname:"Doe",
    age:"24",
    city:"bhopal",
};

console.log(person.fname);
console.log(person.lname);
let text1=" ";
for(let x in person){
    text+= person[x] + "<br>";
}
document.getElementById("demo").innerHTML=text;