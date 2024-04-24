const array1=[];
array1[0]="John";
array1[1]="Doe";
array1[2]=34;
console.log(array1);

const fruits=["Banana","Apple","Chikoo","Kiwi","Mango"];
let flen=fruits.length;
console.log(flen);
let text="<ul>";
for (let i=0;i<flen;i++){
    text+="<li>"+fruits[i]+"</li>";
}
text+="</ul>";
document.getElementById("demo").innerHTML=text;


let x=fruits.push("Watermelon");
console.log(x);
console.log(fruits);

//pop removes element from the last
fruits.pop();
console.log(fruits);

//shift removes element from the first
fruits.shift()
console.log(fruits);


//unshift adds new element at the start of the array
fruits.unshift("Grapes");
console.log(fruits);

//sort method sorts string lists but not number lists
fruits.sort();
console.log(fruits);


console.log(typeof fruits);
let z=fruits.toString();
document.getElementById("demo").innerHTML=z;
console.log(typeof z);
//checks if an object is actually an array
console.log(Array.isArray(fruits));


document.getElementById("demo").innerHTML=fruits.join("*");


//.splice(start index,number of elements to be removed,new,new)
let t=fruits.splice(2,2,"Papaya","Apricot");
//t=elements removed
console.log(t);
console.log(fruits);

//.slice forms a new array with the list[given index: ]
let p=fruits.slice(3);
console.log(p);
console.log(fruits);


const veggies=["Okra","Carrot","cabbage","Chilli"];
const newarray= fruits.concat(veggies);
console.log(newarray);