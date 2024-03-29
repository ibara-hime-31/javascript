let fname="John";
let lname="Doe";

document.getElementById("demo").innerHTML="Hello world";
document.getElementById("demo").innerHTML="Hello "+fname+ " "+ lname+ " WElcome to js class";
document.getElementById("demo").innerHTML=`Hello ${fname}, ${lname}, Welcome to js class`;

function display(){
    let x=document.getElementById("demo2");
    x.style.backgroundColor="pink";
    x.style.border="2px solid red";
    x.innerHTML=`
    <table>
    <tr>
    <th>Name</th>
    <th>Course</th>
    <th>City</th>
    </tr>
    <tr>
    <td>John Doe</td>
    <td>Javascript</td>
    <td>Bhopal</td>
    </tr>
    <tr>
    <td>Mark Evans</td>
    <td>React</td>
    <td>Indore</td>
    </tr>
    </table>`
    
}
document.write("<h2>This is a new heading</h2><p>Lorem ipsum</p>");
function display2(){
    let y=document.getElementById("demo3")
    y.style.backgroundColor="pink";
    y.style.color="red";
    y.style.border="2px dotted black";
    y.style.borderRadius="20px";
}
