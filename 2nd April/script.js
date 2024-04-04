function display(){
    let name=prompt("What is your name?");
    document.getElementById("demo").innerHTML=name;
}
document.getElementById("mybtn").addEventListener("click",show1);
function show1(){
    // window.alert("Pragya");
    // console.log("Pragya");
    // document.write("<p>Pragya</p>");
    let fname=prompt("ENTER YOUR NAME:");
    console.log(fname);
document.getElementById('demo').innerHTML   = 'hello';
console.log('hello');
alert('hello')
// document.write('hello');
}

let age=67;
if (age>=18){
    alert("You are eligible");
}
else{
    alert("You are not eligible");
}