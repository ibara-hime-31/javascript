//higher order function-function inside function

const array1=[13,43,42,56,7,67];
array1.sort(function(a,b){
    return a-b;
})

array1.sort(function(a,b){
    return b-a;
})
console.log(array1);


array1.reverse();
console.log(array1);

const array2=[10,99,87,67,4];
const newArray=[...array1,...array2];
console.log(newArray);

const person1={
    name:"John",
    age:22,
    city:"Bhopal",
};
const person2={
    lastname:"emma",
    author:"Steve",
    city:"Indore"
};
const newperson={...person1,...person2};
console.log(newperson);

const arr1=[1,2,3];
const arr2=[...arr1,4,5,6];
console.log(arr2);


// const a1=[1,2,3];
// const a2=a1;

// a1.push(5);
// console.log(a1);
// console.log(a2);


//spread operator
const a1=[1,2,3];
const a2=[...a1];

a1.push(5);
console.log(a1);
console.log(a2);



