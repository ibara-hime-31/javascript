const mypara="This is a string of names like Rahul,yashi,pragya,mohit and rahul is a good friend of jalaj";

//length
console.log(mypara.length);

//slice
let x=mypara.slice(7,30);
x=mypara.slice(7);
x=mypara.slice(-12,-1);
console.log(x);

//substring, substr, replace, replaceAll, /g/ , /i
x=mypara.substring(7,30);
x=mypara.substring(7);
console.log(x);

x=mypara.replace("rahul","arun");
console.log(x);
console.log(mypara);
x=mypara.replaceAll("rahul","arun");
console.log(x);

x=mypara.replaceAll(/rahul/gi,"arun");
console.log(x);

const myname="john doe";
console.log(myname.toUpperCase());
const subject="JAVASCRIPT";
console.log(subject.toLowerCase());

//CONCAT CHARAT CHARCODEAT

// const newstring = myname + " " + subject;
// const newstring= `${myname} ${subject}`;
const newstring = myname.concat(" ",subject);
console.log(newstring);