const mypara="Apple,Grapes,Watermelon,apple,mango,apples";
console.log(mypara.charAt(16));
console.log(mypara.charCodeAt(0));//returns the value of UTF-8 corresponding to the chatAt index.

let x=mypara.split(",");   //converts string to array
console.log(x);    //seperator


x=mypara.indexOf("Grapes"); //to get the index of any character
console.log(x);


//includes
x=mypara.includes("Watermelon");
console.log(x);

//search
x=mypara.search("mel");
console.log(x);


//match
x=mypara.match(/apple/gi);
console.log(x);
