const arr=[1,2,3,4,5];
const alen=arr.length;

for(let i=0;i<alen;i++){
    console.log(arr[i]);
}
//map method is used for creating a new array from an existing one  by applying a function to each element of the array.
const newArray= arr.map(function(x){
    return x*x;
})
console.log(newArray);

//filter method takes each element in an array and it applies a conditional statement to each element, if the element returns true the value gets pushed to the output array otherwise not.

const arr1=[1,2,3,4,5,6];

const myArray = arr1.filter((item)=>{
    return item %2!=0;
});
console.log(myArray);

//reduce method reduces an array of values to a single value

const numbers=[1,2,3,4,5];
const sum=numbers.reduce(function(result,item){
    return result + item;
},0);
console.log(sum);