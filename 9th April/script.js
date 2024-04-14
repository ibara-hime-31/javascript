
function display(){
    let name=prompt("Enter your name:");
let course=prompt("Enter your course: ");
let city=prompt("Enter your city: ");
    console.log(name,course,city);
}
let name="Pragya";
let course="Python";
let city="Bhopal";
function display2(){
    document.getElementById("demo").innerHTML=`${name} ${course} ${city}`;
}
//use + in case of innerHTML.
//baptics is called temperate literals.
//Hoisting- javascript's default behavior of moving declarations to the top of the current scope.